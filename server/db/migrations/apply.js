import { db } from '../db.js';
import { migration_00 } from './migration_00.js';
import { migration_01 } from './migration_01.js';

export const applyMigrations = () => {
  if (!db.data?.skills) {
    migration_00();
  } else {
    console.info('migration_00 had been already applied');
  }

  if (!db.data?.students) {
    migration_01();
  } else {
    console.info('migration_01 had been already applied');
  }
};



