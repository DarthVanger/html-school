export const studentsApi = ({app, db}) => {
  app.get('/students', (req, res) => {
    console.info(`GET /students`);

    const students = db.data?.students;

    res.json(students);
  });
};
