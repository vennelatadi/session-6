const express = require('express')
const app = express()
app.use(express.static(process.argv[3] || path.join(__dirname, 'index.html')))
app.listen(process.argv[2])