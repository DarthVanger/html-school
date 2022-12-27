import { db } from '../db.js';

/**
 * Drop codeAcademy table due to structure change
 */
export const migration_02 = async () => {
  db.data.codeAcademy = {};
  db.data.migrations['migration_02'] = true;
  console.log('Applying migration_02 (codeAcademy table drop) ');
  await db.write();
};
