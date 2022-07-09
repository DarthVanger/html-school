const express = require('express')
const app = express()
const port = 8080

app.use(express.static('./'))

app.post('/', (req, res) => {
  console.log('saving: ', req);
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
