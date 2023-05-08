const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res, next) => {
  console.log('You accessed the app #', process.env.COUNTER)

  setTimeout(() => {
    console.log('Sending from', process.env.COUNTER)
    return res.send(`<h1>Counter: ${process.env.COUNTER}</h1>`)
  }, 3000)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  console.log('COUNTER = ', process.env.COUNTER);
})
