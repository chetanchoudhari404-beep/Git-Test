const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log('checking..');
  res.send('New feature !!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
