export const questApi = ({app, db}) => {
  app.get('/quests/completed/:student', (req, res) => {
    const { student } = req.params;
    console.info(`GET /quests/completed/${student}`);

    const quests = db.data?.quests;
    if (!quests || !quests[student]) {
      res.json([]);
      return;
    }

    const result = db.data.quests[student];
    res.json(result);
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

    const completedQuests = studentQuests
      .filter(q => q.id === id);

    const lastCompletion = completedQuests[completedQuests.length - 1];
    console.log('lastCompletion: ', lastCompletion);

    const now = new Date();

    if (lastCompletion) {
      const completionDate = new Date(lastCompletion.date);
      const diff = now.getTime() - completionDate.getTime();
      const diffMinutes = diff / 1000 / 60;

      const cooldownTimeMinutes = 60 * 24;

      if (diffMinutes < cooldownTimeMinutes) {
        console.log(`Quest cooldown! Id: ${id}, diffMinutes: ${diffMinutes}`);
        res.status(400).send({
          lastCompletion,
          cooldownHours: (cooldownTimeMinutes - diffMinutes) / 60,
        });
        return;
      }
    }

    console.log(`Quest accepted! Id: ${id}`);
    const questData = {
      id,
      date: now.toISOString(),
      ip,
    };

    db.data.quests[student].push(questData);
    db.write();

    res.sendStatus(200);
    res.end();
  });
};
