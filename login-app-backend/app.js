import express from "express"
import cors from "cors"
import AuthControllers from "../login-app-backend/controllers/auth.controllers.js"

// EXPRESS


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CORS
const cors = require("cors")
app.use(cors())

//CONNECT TO DATABASE MYSQL






app.use("/auth",LoginRoute)

app.listen(3000)

