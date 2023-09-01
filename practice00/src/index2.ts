import express from 'express'

const app = express()
const port = 2211

const db = {
    courses: [
        {id: 1, title: 'один'},
        {id: 2, title: 'два'},
        {id: 3, title: 'три'},
        {id: 4, title: 'четыре'},
    ]
}
app.get('/courses', (req, res) => {
    res.json(db.courses);
})

app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find(c => c.id === +req.params.id);

    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourse);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})