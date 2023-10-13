// Import
import express from "express"
import cors from "cors"
import mysql from "mysql2"
import AuthController from "../login-app-backend/controllers/auth.controllers.js"

// Config
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//Connect to MySQL database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "my-secret-pw",
  database: "PUBLIC",
  port: 3307,
})

connection.connect(function (err) {
  if (err) throw err
  let sql =
    "CREATE TABLE IF NOT EXISTS users (id int NOT NULL UNIQUE AUTO_INCREMENT, fullname VARCHAR(255), user_name VARCHAR(255), password VARCHAR(255), email VARCHAR(255))"
  connection.query(sql, function (err, result) {
    if (err) throw err
    console.log("Table created")
  })
  console.log("Connected!")
})

// Route
app.use("/auth", AuthController)

// Port
app.listen(3000)
