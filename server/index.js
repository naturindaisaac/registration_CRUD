import express from 'express'
import cors from 'cors'
import authrouter from './routes/authRoutes.js'
const app= express()
app.use(cors())
app.use('/auth', authrouter)
app.use(express.json())
app.listen(process.env.PORT,()=>
{
    console.log('the server is runining')
}
)