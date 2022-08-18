import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import { applyMigrations } from './db/migrations/apply.js';

import express from 'express'
const app = express()
const port = process.env.port || 8081

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

//app.get('/homework/:student', (req, res) => {
//  const { student } = req.params;
//  const homework = db.data?.homework && db.data.homework[student] || [];
//  res.json(homework);
//});

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, lecturePoints, questPoints } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, lecturePoints, questPoints });
})

app.get('/quests/completed/:student', (req, res) => {
  const { student } = req.params;
  console.info(`GET /quests/completed/${student}`);

  const quests = db.data?.quests;
  if (!quests || !quests[student]) {
    res.json([]);
    return;
  }

  res.json(db.data.quests[student]);
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

  const lastCompletion = studentQuests
    .sort((a, b) => new Date(b) - new Date(a))
    .find(q => q.id === id);

  const lastCompletionIndex = studentQuests.indexOf(lastCompletion);

  const now = new Date();
  const questData = {
    id,
    date: now.toISOString(),
    ip,
  };

  if (lastCompletion) {
    const dateDiff = now.getTime() - (new Date(lastCompletion.date)).getTime();
    const oneDay = 1000 * 60 * 60 * 24;

    if (dateDiff < oneDay) {
      console.debug(
        `Student "${student}" has completed the same quest "${id}" ${dateDiff}ms ago, ` +
        `which is less than 24 hours. Overwriting last completion.`
      );
      db.data.quests[student][lastCompletionIndex] = questData;
    }
  } else {
    console.debug(`Student "${student}" has completed a new quest "${id}". Pushing quest to his completions.`);
    db.data.quests[student].push(questData);
  }

  db.write();

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
