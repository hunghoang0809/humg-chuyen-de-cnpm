import express from "express"
import cors from "cors"
// import AuthControllers from "../login-app-backend/controllers/auth.controllers.js"
import cookieParser from "cookie-parser"
import mysql from "mysql2"

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

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser())

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  }),
)

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body

  let sqlUserSelect =
    "SELECT DISTINCT * FROM users WHERE user_name = ? AND password = ?"
  connection.query(
    sqlUserSelect,
    [username, password],

    function (err, result) {
      if (err) {
        console.log(err)
        return
      }

      if (!result || result.length === 0)
        throw res.status(400).json({ msg: "Tên đăng nhậph hoặc mật khẩu không đúng" })

      res.cookie("id", result[0].id, {
        sameSite: "none",
        secure: true,
      })

      return res.status(200).json(result)
    },
  )
})

app.post("/auth/register", (req, res) => {
  const { name, username, password, email } = req.body
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
          let sqlUserInsert =
            "INSERT INTO users (fullname, user_name, password, email) VALUES (?, ?, ?, ?)"
          connection.query(
            sqlUserInsert,
            [name, username, password, email],

            function (err, result) {
              if (err) {
                console.log(err)
                return res.status(400).json({msg: 'Đăng kí không thành công'})
              }

              return res.status(200).json(result)
            },
          )
        }
      },
    )
  }
})

app.post("/auth/logout", CheckLogin, (req, res) => {
  const userId = req.cookies.id

  let sqlUserSelect = "SELECT * FROM users WHERE id = ?"
  connection.query(sqlUserSelect, [userId], function (err, result) {
    if (err) {
      console.log(err)
      return res.status(400).json({msg:'lỗi truy vấn cơ sở dữ liệu'})
    }

    res.clearCookie("id", {
      sameSite: "none",
      secure: true,
    })

    return res.status(200).json("Đăng xuất thành công")
  })
})

function CheckLogin(req, res, next) {
  const userId = req.cookies.id
  if (userId) {
    next()
  } else {
    res.status(401).json("Unauthorized")
  }
}

app.get("/profile", CheckLogin, (req, res) => {
  const userId = req.cookies.id

  let sqlUserSelect = "SELECT * FROM users WHERE id = ?"
  connection.query(sqlUserSelect, [userId], function (err, result) {
    if (err) {
      console.log(err)
      return res.status(400).json("Lỗi truy vấn cơ sở dữ liệu")
    }

    if (!result || result.length === 0)
      return res.status(400).json("Không tìm thấy người dùng")

    return res.status(200).json(result[0])
  })
})

app.listen(3000)
