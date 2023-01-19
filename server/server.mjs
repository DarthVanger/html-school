import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import { applyMigrations } from './db/migrations/apply.js';
import { studentsApi } from './studentsApi.js';
import { homeworkApi } from './homeworkApi.js';
import { questApi } from './questApi.js';
import { catacombsApi } from './catacombsApi.js';
import { socket } from './socket/socket.js';

import express from 'express'
const app = express()
const port = process.env.port || 8080

app.use(express.static('./'))
app.use(express.json());

const runApp = async () => {
  await loadDb();
  if (!db.data) db.data = {};
  console.log('Db loaded');

  console.info('Applying migrations');
  applyMigrations();

  const server = app.listen(port, () => {
    console.log(`HTTP Listening on port ${port}`)
  });

  // Enable WebSockets
  // https://masteringjs.io/tutorials/express/websockets
  server.on('upgrade', (request, ws, head) => {
    socket.handleUpgrade(request, ws, head, ws => {
      socket.emit('connection', ws, request);
    });
  });
};

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, lecturePoints, questPoints } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, lecturePoints, questPoints, codeAcademy: db.data.codeAcademy, students: db.data.students });
})



studentsApi({app, db});
homeworkApi({app, db});
questApi({app, db});
catacombsApi({app, db});


(async () => {
  await runApp();
})();
