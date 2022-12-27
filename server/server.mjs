import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import { applyMigrations } from './db/migrations/apply.js';
import https from 'https';
import fs from 'fs';

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

  if (process.env.HTTPS) {
    var httpsServer = https.createServer(credentials, app);
    var privateKey  = fs.readFileSync('certs/privkey.pem', 'utf8');
    var certificate = fs.readFileSync('certs/fullchain.pem', 'utf8');
    var credentials = {key: privateKey, cert: certificate};

    httpsServer.listen(port, () => {
      console.log(`HTTPS Listening on port ${port}`)
    });
  } else {
    app.listen(port, () => {
      console.log(`HTTP Listening on port ${port}`)
    });
  }
};

//app.get('/homework/:student', (req, res) => {
//  const { student } = req.params;
//  const homework = db.data?.homework && db.data.homework[student] || [];
//  res.json(homework);
//});

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, lecturePoints, questPoints } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, lecturePoints, questPoints, codeAcademy: db.data.codeAcademy });
})

app.get('/quests/completed/:student', (req, res) => {
  const { student } = req.params;
  console.info(`GET /quests/completed/${student}`);

  const quests = db.data?.quests;
  if (!quests || !quests[student]) {
    res.json([]);
    return;
  }

  const result = db.data.quests[student];
  res.json(result);
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
  const studentQuests = db.data.quests[student];

  const completedQuests = studentQuests
    .filter(q => q.id === id);

  const lastCompletion = completedQuests[completedQuests.length - 1];
  console.log('lastCompletion: ', lastCompletion);

  const now = new Date();

  if (lastCompletion) {
    const completionDate = new Date(lastCompletion.date);
    const diff = now.getTime() - completionDate.getTime();
    const diffMinutes = diff / 1000 / 60;

    const cooldownTimeMinutes = 60 * 24;

    if (diffMinutes < cooldownTimeMinutes) {
      console.log(`Quest cooldown! Id: ${id}, diffMinutes: ${diffMinutes}`);
      res.status(400).send({
        lastCompletion,
        cooldownHours: (cooldownTimeMinutes - diffMinutes) / 60,
      });
      return;
    }
  }

  console.log(`Quest accepted! Id: ${id}`);
  const questData = {
    id,
    date: now.toISOString(),
    ip,
  };

  db.data.quests[student].push(questData);
  db.write();

  res.sendStatus(200);
  res.end();
});

app.get('/catacombs', async (req, res) => {
  console.info(`GET catacombs`);
  res.json(db.data.catacombs);
});

app.post('/catacombs', async (req, res) => {
  console.info(`POST catacombs:`, req.body);

  const { student, levelId, code } = req.body;

  db.data.catacombs = db.data.catacombs || {};
  db.data.catacombs[student] = db.data.catacombs[student] || {};
  const studCata = db.data.catacombs[student];
  const now = new Date();
  const entry = {
    date: now.toISOString(),
    code,
  };
  studCata[levelId] = entry;

  await db.write();
  console.info('DB write Success', entry);
  res.json(entry);
});

app.post('/code-academy', async (req, res) => {
  console.info(`POST /code-academy`, req.body);
  const { student, points } = req.body;

  if (!student || !points) {
    return res.status(400).send('Bad Request');
  }

  db.data.codeAcademy = db.data.codeAcademy || {};
  db.data.codeAcademy[student] = points;

  await db.write();
  console.info(`DB write Success. Student: ${student}, points: ${points}`);
  res.sendStatus(200);
  res.end();
});

app.post('/homework/:student', async (req, res) => {
  const { student } = req.params;
  console.info(`POST /homework/${student}:`, req.params);

  if (!student) {
    return res.status(400).send('Bad Request');
  }

  const entry = JSON.parse(req.body.homework);

  db.data.homework = db.data.homework || {};
  db.data.homework[student] = db.data.homework[student] || [];


  db.data.homework[student].push(entry);

  await db.write();
  console.info('DB write Success', entry);
  res.json(entry);
});

(async () => {
  await runApp();
})();
