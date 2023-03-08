export const studentsApi = ({app, db}) => {
  app.get('/students', (req, res) => {
    console.info(`GET /students`);

    const students = db.data?.students;

    res.json(students);
  });

  app.get('/students/online-log', (req, res) => {
    console.info(`GET /students/online-log`);

    const onlineLog = db.data?.onlineLog;

    res.json(onlineLog);
  });
};
