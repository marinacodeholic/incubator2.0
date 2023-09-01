// @ts-ignore
import express from "express"

const app = express()
const port = 2022

app.get('/', (req, res) => {
    res.send('Hello hello you!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})