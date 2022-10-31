import { db } from '../db.js';

export const migration_01 = async () => {
  const students = [
    'johnny',
    'tony',
    'dimon',
    'valik_h',
    'mister-smith',
    'dr_p0n4ek',
  ];

  db.data.students = students;
  console.log('Applying migration for students: ', students);
  await db.write();
};
