import express from 'express'
import config from './config'
import tasksRoutes from './routes/tasks.routes'

const app = express()

// Settings
app.set('port', config.port)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use(tasksRoutes)

export default app