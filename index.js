import express from 'express'
import initApp from './src/app.router.js'
const app = express()
const port = 5000




initApp(express,app)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))