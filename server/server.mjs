import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import { applyMigrations } from './db/migrations/apply.js';

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

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
};

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, homework, questPoints } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, homework, questPoints });
})

app.get('/points/quests/:student', (req, res) => {
  const { skill, student } = req.params;
  console.info(`GET /points/quests/${skill}/${student}`);

  getQuestsPoints({ skill, student });
});

app.get('/quests/completed/:student', (req, res) => {
  const {  student } = req.params;
  console.info(`GET /quests/completed/${student}`);

  const quests = db.data?.quests;
  if (!quests || !quests[student]) {
    res.json([]);
    return;
  }

  res.json(db.data.quests[student]);
});

app.post('/code-run', async (req, res) => {
  console.info(`POST /code-run`, req.body);
  const codeRunInfo = req.body;
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress, remoteFamily } = socket;

  db.data.codeRunLog = db.data?.codeRunLog || [];
  db.data.codeRunLog.push({
    date: (new Date()).toISOString(),
    codeRunInfo,
    requestInfo: {
      rawHeaders,
      httpVersion,
      method,
      remoteAddress,
      remoteFamily,
      url
    },
  });

  db.write();

  res.sendStatus(200);
  res.end();
});

/**
 * Log quest complete
 */
app.post('/quest/:id', async (req, res) => {
  console.info(`POST /quest`, req.body);
  const { id } = req.params;
  const { student } = req.body;
  const ip = req.socket.remoteAddress;

  db.data.quests = db.data?.quests || {};

  db.data.quests[student] = db.data.quests[student] || [];

  db.data.quests[student].push({
    id,
    date: (new Date()).toISOString(),
    ip,
  });

  db.write();

  res.sendStatus(200);
  res.end();
});

app.post('/tree/:skill/:student', async (req, res) => {
  const { skill, student } = req.params;
  console.info(`POST /tree/${skill}/${student}:`, req.params);

  if (!skill || ! student) {
    return res.status(400).send('Bad Request');
  }

  db.data.homework = db.data.homework || {};
  db.data.homework[student] = db.data.homework[student] || [];

  const entry = {
    skill,
    tag: 'homework',
    date: (new Date()).toISOString(),
  };

  db.data.homework[student].push(entry);

  await db.write();
  console.info('DB write Success', entry);
  res.json(entry);
});

(async () => {
  await runApp();
})();
