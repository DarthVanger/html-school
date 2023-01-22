export const catacombsApi = ({app, db}) => {
  app.get('/catacombs', async (req, res) => {
    console.info(`GET catacombs`);
    const cata = {...db.data.catacombs};
    for (let stud of db.data.students) {
      if (!cata[stud]) {
        cata[stud] = null;
      }
    }
    res.json(cata);
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
};
