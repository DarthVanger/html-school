import { db } from '../db.js';

export const migration_01 = async () => {
  const students = [
    'napaleon',
    'johnny',
    'tony',
    'dimon',
    'mister-smith',
    'valik_h',
    'mazerTim',
    'russi4',
    'alex',
    'yrtz',
    'other-species',
  ];

  db.data.students = students;
  console.log('Applying migration for students: ', students);
  await db.write();
};
