console.log("hello world")
const express = require("express")
const app = express()
//Lay du lieu GET
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/user", checkLogin, (req, res) => {
  console.log("Here")
  res.send("Xin chao Hoc Tran")
  //res.send("Hello world");
})

//Login
let users = [{ username: "hoctran", password: "123456789" }]
app.post("/login", (req, res) => {
  //logic cau request
  console.log(req.body)
  if (
    req.body.username === users[0].username &&
    req.body.password === users[0].password
  ) {
    res.status(200).json({ message: "Dang nhap thanh cong" })
    return
  }
  res.status(400).json({ message: "Dang nhap that bai" })
})
//Dang ky
app.put("/resgister", (req, res) => {
  res.status(200).json({ message: "Day la PUT Request" })
})

//middleware Da dang nhap chua
function checkLogin(req, res, next) {
  let isLogin = true
  if (!isLogin) {
    res.send("Chua Dang nhap")
    return
  }
  next()
}

app.listen(3000)
