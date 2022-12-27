import { db } from '../db.js';
import { migration_00 } from './migration_00.js';
import { migration_01 } from './migration_01.js';
import { migration_02 } from './migration_02.js';

export const applyMigrations = () => {
  if (!db.data.migrations) {
    db.data.migrations = {};
  }
  migration_00();
  migration_01();
  if (!db.data.migrations.migration_02) {
    migration_02();
  } else {
    console.log('migration_02 already applied, skipping');
  }
};



