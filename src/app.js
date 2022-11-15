import express from 'express'
import personRoutes from './routes/person.routes.js'
import postRoutes from './routes/post.routes.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

app.get('/person/login', (req, res) => {
    const user = { id: 3 }
    const token = jwt.sign({ user }, 'secret_key')
    res.cookie('token', token, {
        maxAge: 10000,
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    })
    res.json({ token })
})
app.get('/person/logout', (req, res) => {
    if (req.cookies.token) {
        res.clearCookie("token")
        res.send("close session and delete cookie token")
    } else {
        res.send("you dont have token")
    }

})
app.use(({ query, cookies }, res, next) => {
    jwt.verify(cookies.token, 'secret_key', (err, data) => {

        if (err) { res.sendStatus(403) } else { next() }
    })
})
app.use(personRoutes)
app.use(postRoutes)

export default app