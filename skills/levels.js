export const students = [
  'johnny',
  'tony',
  'dimon',
];

let skills = {
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
      { text: 'on\nclick', level: { johnny: 2, tony: 0, dimon: 1, }, },
      { text: 'style', level: { johnny: 2, tony: 0, dimon: 0, }, },
      { text: 'inner\nHTML', level: { johnny : 2, tony: 0, dimon: 1, }, },
    ],
    [
      { text: 'var\niables', level: { johnny: 0, tony: 0, dimon: 0, }, },
      { text: 'func\ntions', level: { johnny: 1, tony: 0, dimon: 1, }, },
    ],
  ]
};

const points = {};
const levels = {};
const categoryLevels = {};
for (let student of students) {
  points[student] = 0;
  levels[student] = 0;
}

for (let category in skills) {
  let categoryLevel = {};
  categoryLevels[category] = {};
  for (let student of students) {
    categoryLevel[student] = 0;
  }
  for (let branch of skills[category]) {
    for (let skill of branch) {
      for (let student of students) {
        categoryLevel[student] += skill.level[student];
      }
    }
  }
  skills[category].level = categoryLevel;
  categoryLevels[category].level = categoryLevel;
}

for (let student of students) {
  for (let category in skills) {
    points[student] += skills[category].level[student];
  }
}

for (let student of students) {
  //points[student] = Math.round(points[student] / 10);
  levels[student] = Math.floor(points[student] / 10);
}

console.log('levels: ', levels);
console.log('points: ', points);
console.log('skills: ', skills);

export { skills, levels, points, categoryLevels };
