export const homeworkApi = ({app, db}) => {
  //app.get('/homework/:student', (req, res) => {
  //  const { student } = req.params;
  //  const homework = db.data?.homework && db.data.homework[student] || [];
  //  res.json(homework);
  //});
  //
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

  app.post('/code-academy', async (req, res) => {
    console.info(`POST /code-academy`, req.body);
    const { student, points } = req.body;

    if (!student || !points) {
      return res.status(400).send('Bad Request');
    }

    db.data.codeAcademy = db.data.codeAcademy || {};
    db.data.codeAcademy[student] = db.data.codeAcademy[student] || [];
    const now = new Date();
    const entry = {
      date: now.toISOString(),
      points,
    };

    db.data.codeAcademy[student].push(entry);

    await db.write();
    console.info(`DB write Success. Student: ${student}, points: ${points}`);
    res.json(entry);
    res.end();
  });


};
