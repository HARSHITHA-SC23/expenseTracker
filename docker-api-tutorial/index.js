const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    name: 'HARSHITHA SC',
    email: 'abc@gmail.com'
  },
  {
    name: 'ARPITHA SC',
    email: 'abc@gmail.com'
  },
  {
    name: 'ANITHA SC',
    email: 'abc@gmail.com'
  },
  {
    name: 'AMOGH SC',
    email: 'abc@gmail.com'
  },
  {
    name: 'SK CHANDRASHEKAR',
    email: 'abc@gmail.com'
  }
])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})