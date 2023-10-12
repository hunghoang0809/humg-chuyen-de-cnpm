const express = require("express")

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const cors = require("cors")
app.use(cors())

//CONNECT TO DATABASE MYSQL

const mysql = require("mysql2")

var connection = mysql.createConnection({
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

//Login
app.post("/login", (req, res) => {
  let { username, password } = req.body

  if (req.body.username && req.body.password) {
    let sqlUserSelect = "SELECT * FROM users WHERE user_name = ?"
    connection.query(
      sqlUserSelect,
      [req.body.username, req.body.password],
      function (err, result) {
        if (err) {
          console.log(err)
          return
        }
        if (result && result.length < 1) {
          res.status(400).json({ msg: "Dang nhap khong thanh cong" })
          return
        }
        res.status(200).json(result)

        return
      }
    )
  }
})
//Dang ky
app.post("/register", (req, res) => {
  let name = req.body.name
  let username = req.body.username
  let password = req.body.password
  let email = req.body.email
  if (username && password && email) {
    connection.query(
      "SELECT * FROM users WHERE user_name = ? ",
      [username],
      function (err, result) {
        if (err) {
          console.log(err)
          return
        }
        if (result.length > 0) {
          res.status(400).json({ msg: "Tên đăng nhập đã tồn tại" })
        } else {
          let sqlAddUser =
            "INSERT INTO users (fullname, user_name, password, email) VALUES (?, ?, ?, ?)"

          connection.query(
            sqlAddUser,
            [name, username, password, email],
            function (err, result) {
              if (err) {
                console.log(err)
                return
              }
              res.status(200).json(result)
            }
          )
        }
      }
    )
  }
})
//Get User By ID
// Add checkLogin middleware function
function checkLogin(req, res, next) {
  if (!req.param.username || !req.param.password) {
    res.send("Chua dang nhap")
    return
  }
  //logic kiểm tra đã đăng nhập hay chưa
  next()
}

// Get user by ID
app.get("/user/:id", checkLogin, (req, res) => {
  let id = req.params.id
  let sqlLoginUser = "SELECT * FROM users WHERE id = ?"
  connection.query(sqlLoginUser, [id], function (err, result) {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
    res.status(200).json(result)
  })
})

app.listen(3000)
function checkLogin(req, res, next) {
  if (req.param.username && req.param.username) {
    let isLogin = false
    if (!isLogin) {
      res.send("Chua dang nhap")
      return
    }
  }
  //logic kiểm tra đã đăng nhập hay chưa

  next()
}

app.listen(3000)
