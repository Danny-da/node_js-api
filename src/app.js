import express  from 'express'
import employeesRouters from './routes/employees.routes.js'
import indexRouters from './routes/index.routes.js'

const app = express()

app.use(express.json())
app.use(indexRouters)
app.use('/api',employeesRouters)
app.use((req, res, next) => {
    res.status(404).json({
        message : 'Endpoint not found'
    })
})
export default app;