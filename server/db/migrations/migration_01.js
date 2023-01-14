import { db } from '../db.js';

export const migration_01 = async () => {
  const students = [
    'napaleon',
    'johnny',
    'tony',
    'dimon',
    'mister-smith',
    'valik_h',
    //'mazerTim',
    'other-species',
    'russi4',
  ];

  db.data.students = students;
  console.log('Applying migration for students: ', students);
  await db.write();
};
