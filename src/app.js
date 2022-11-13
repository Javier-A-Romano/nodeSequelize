import express from 'express'
import personRoutes from './routes/person.routes.js'
import postRoutes from './routes/post.routes.js'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

app.post('/person/login', (req, res) => {
    const user = { id: 3 }
    const token = jwt.sign({ user }, 'secret_key')

    res.json({ token })
})
app.use(({ query }, res, next) => {
    jwt.verify(query.token, 'secret_key', (err, data) => {
        if (err) {res.sendStatus(403) } else { next()}
    })
})
app.use(personRoutes)
app.use(postRoutes)

export default app