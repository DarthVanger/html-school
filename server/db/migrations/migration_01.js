import { db } from '../db.js';

export const migration_01 = async () => {
  const students = [
    'denys',
    'napaleon',
    'johnny',
    'xelga',
    'lpsayko',
    'TinaDenysiuk',
    'tony',
    'dimon',
    'mister-smith',
    'valik_h',
    'other-species',
  ];

  db.data.students = students;
  console.log('Applying migration for students: ', students);
  await db.write();
};
