import express from "express"
import cors from "cors"
import AuthControllers from "../login-app-backend/controllers/auth.controllers.js"


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())


app.use("/auth", AuthControllers)

app.listen(3000)

