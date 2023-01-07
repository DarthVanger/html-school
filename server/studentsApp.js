export const studentsApp = ({app, db}) => {
  app.get('/students', (req, res) => {
    console.info(`GET /students`);

    const students = db.data?.students;

    res.json(students);
  });
};
