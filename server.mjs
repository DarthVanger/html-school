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
  console.log('GET /tree');

  const { levels, points, categoryLevels, homework } = getStats();
  res.json({ skills: db.data.skills, levels, points, categoryLevels, homework });
})

app.post('/tree/:skill/:student', (req, res) => {
  console.log(`POST /tree/skill/student:`, req.params);
  const { skill, student } = req.params;

  if (!skill || ! student) {
    return res.status(400).send('Bad Request');
  }


  db.data.homework = db.data.homework || {};
  db.data.homework[student] = db.data.homework[student] || [];

  db.data.homework[student].push({
    skill,
    tag: 'homework',
    date: (new Date()).toISOString(),
  });

  db.write();
  //db.data.skills.push('hello world')
  //const firstPost = db.data.posts[0]
});

(async () => {
  await runApp();
})();
