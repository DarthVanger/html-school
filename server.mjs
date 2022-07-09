import { skills, students, levels, points, categoryLevels } from './skills/levels.js'
import express from 'express'
const app = express()
const port = 8080

app.use(express.static('./'))

app.get('/tree', (req, res) => {
  res.json({ skills, levels, points, categoryLevels });
})

app.post('/', (req, res) => {
  console.log('saving: ', req);
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
