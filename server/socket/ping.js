import { db } from '../db/db.js';

export const pingSocketHandler = ({ data, ws, aliveClients, pingInterval, wsSendAll }) => {
  if (data.name == 'ping') {
    const { student, isTabActive } = data.payload;
    //console.log(`PING from student ${student}, isTabActive: ${isTabActive}`);
    if (!student) {
      console.warn('Received ping from "null" student. Ignoring.');
      return;
    }

    aliveClients[student] = ws;
    ws.isAlive = true;

    if (!isTabActive) return;

    const lastOnlineDate = new Date(db.data.studentsOnline[student]);
    const now = new Date();
    const timePast = now.getTime() - lastOnlineDate.getTime();
    const isOnline = timePast <= pingInterval * 2;

    const studOnlineLog = db.data.onlineLog[student];

    if (!isOnline) {
      studOnlineLog.push({
        date: now,
        durationMinutes: 0,
      });
    } else {
      studOnlineLog[studOnlineLog.length - 1].durationMinutes += pingInterval / 1000 / 60;
    }

    db.write();
    
    db.data.studentsOnline[student] = now;

    const payload = db.data.studentsOnline;

    wsSendAll({
      name: 'online_students',
      payload,
    });
  }
};
