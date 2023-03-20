import { expByStudent } from './experience.js';

export const experienceApi = ({app, db}) => {
  app.get('/experience', (req, res) => {
    console.info(`GET /experience`);

    res.json(expByStudent());
  });
};
