import path from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

// Use JSON file for storage
const file = path.resolve('db/db.json')
console.log('DB storage file at : ', file);
const adapter = new JSONFile(file)
export const db = new Low(adapter)

export const loadDb = async () => {
  await db.read();  
  return db;
};
