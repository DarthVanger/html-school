import { db } from '../db.js';

export const migration_01 = async () => {
  const students = [
    'johnny',
    'tony',
    'dimon',
  ];

  db.data.students = students;
  console.log('Applying migration for stuents: ', students);
  await db.write();
};
