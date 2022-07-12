import { db, loadDb } from './db/db.js';
import { getStats } from './db/stats.js';
import express from 'express'
const app = express()
const port = 8080

app.use(express.static('./'))

const runApp = async () => {
  await loadDb();
  console.log('Db loaded');

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
};

app.get('/tree', (req, res) => {
  console.info('GET /tree');

  const { levels, points, categoryLevels, homework } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, homework });
})

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
