import { expByStudent } from './experience.js';

export const experienceApi = ({app, db}) => {
  app.get('/experience', (req, res) => {
    console.info(`GET /experience`);

    res.json(expByStudent());
  });

  app.post('/experience/:student', (req, res) => {
    const { student } = req.params;
    console.info(`GET /experience/${student}`);

    if (!student) {
      res.status(400).send(`Expecting student in URL params`)
    }

    console.log('req.body: ', req.body);
    const { category, points } = req.body;

    if (!category) {
      res.status(400).send(`Expecting category in request body`)
    }

    if (!points) {
      res.status(400).send(`Expecting category in request body`)
    }

    if (!db.data.experience) {
      db.data.experience = {}
    }

    if (!db.data.experience[student]) {
      db.data.experience[student] = {}
    }

    const now = new Date();

    const existingCategory = db.data.experience[student][category];

    if (!existingCategory) {
      const newCategory = {
        name: category,
        points: 0,
        entries: [],
      }
      db.data.experience[student][category] = newCategory
    }

    console.log('db.data.experience[student]: ', db.data.experience[student]);
    const expEntry = {
      date: now.toISOString(),
      points,
      description: req.body.description,
    };


    db.data.experience[student][category].entries.push(expEntry);
    db.data.experience[student][category].points += points;

    db.write();

    res.json(db.data.experience[student][category]);
  });
};
