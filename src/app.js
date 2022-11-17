import express from 'express'
import personRoutes from './routes/person.routes.js'
import postRoutes from './routes/post.routes.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'


const options  = {
    explorer: true,
    definition  : {
        openapi: "3.0.0",
        info: {
            title: "person and post api",
            version: "1.0.1",
            description: " node express sequelize swagger token"
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
        apis: ['./src/routes/*.js'],
    
};



const app = express()

app.use(express.json())
app.use(cookieParser())


const specs = swaggerJSDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))



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
/*app.use(({ query, cookies }, res, next) => {
    jwt.verify(cookies.token, 'secret_key', (err, data) => {

        if (err) { res.sendStatus(403) } else { next() }
    })
})
*/
app.use(personRoutes)
app.use(postRoutes)

export default app