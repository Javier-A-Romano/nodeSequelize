import express from 'express'
import personRoutes from './routes/person.routes.js'
import postRoutes from './routes/post.routes.js'

const app = express()
app.use(express.json())

app.use(personRoutes)
app.use(postRoutes)

export default app