import { db } from '../db.js';
import { migration_00 } from './migration_00.js';
import { migration_01 } from './migration_01.js';

export const applyMigrations = () => {
  migration_00();
  migration_01();

  if (!db.data?.students) {
    //migration_01();
  } else {
    //console.info('migration_01 had been already applied');
  }
};



