import { db } from '../db.js';

export const migration_00 = async () => {
  const skills = {
    html: [
      [
        { text: '<h1>', level: { johnny : 3, tony: 2, dimon: 3, } },
        { text: '<p>', level: { johnny : 3, tony: 2, dimon: 3, }, },
        { text: '<img>', level: { johnny : 3, tony: 2, dimon: 3, }, },
        { text: '<br>', level: { johnny : 3, tony: 1, dimon: 3, } },
        { text: '<hr>', level: { johnny : 3, tony: 1, dimon: 1, } },
      ],
      [
        { text: '<a>', level: { johnny : 2, tony: 1, dimon: 3, }, },
        { text: '<video>', level: { johnny : 3, tony: 1, dimon: 1, }, },
      ],
    ],
    css: [
      [
        { text: 'h1, p', level: { johnny : 3, tony: 2, dimon: 2, }, },
        { text: 'color', level: { johnny : 3, tony: 2, dimon: 3, }, },
        { text: 'font\nsize', level: { johnny : 1, tony: 1, dimon: 1, }, },
        { text: 'font\nfamily', level: { johnny : 0, tony: 0, dimon: 0, } },
      ],
      [
        { text: 'padding', level: { johnny : 1, tony: 1, dimon: 1, } },
        { text: 'margin', level: { johnny : 1, tony: 1, dimon: 1, } },
        { text: 'border', level: { johnny : 1, tony: 1, dimon: 1, } },
        { text: 'position', level: { johnny : 0, tony: 0, dimon: 0, } },
      ],
    ],
    js: [
      [
        { id: 'alert', text: 'alert', level: { johnny: 3, tony: 1, dimon: 2 }, },
        { text: 'on\nclick', level: { johnny: 3, tony: 2, dimon: 2, }, },
        { text: 'style', level: { johnny: 2, tony: 1, dimon: 1, }, },
        { id: 'innerHTML', text: 'inner\nHTML', level: { johnny : 2, tony: 1, dimon: 1, }, },
      ],
      [
        { id: 'variables', text: 'var\niables', level: { johnny: 1, tony: 1, dimon: 1, }, },
        { id: 'functions', text: 'func\ntions', level: { johnny: 3, tony: 1, dimon: 2, }, },
        { id: '+=', text: '+=', level: { johnny: 1, tony: 1, dimon: 1, }, },
      ],
    ]
  };

  db.data.skills = skills;

  console.log('Applying migration for skills: ', skills);
  await db.write();
};
