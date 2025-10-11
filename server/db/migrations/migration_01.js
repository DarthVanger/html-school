import { db } from '../db.js';

export const migration_01 = async () => {
  const students = [
    'prostoAlesha',
    'denys',
    'napaleon',
    'johnny',
    'dimon',
    'mister-smith',
    'other-species',
  ];

  db.data.students = students;
  console.log('Applying migration for students: ', students);
  await db.write();
};
