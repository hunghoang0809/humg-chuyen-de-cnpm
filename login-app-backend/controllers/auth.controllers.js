
import connection from "../database/connection.js"

async function Login(req, res) {

  const { username, password } = req.body

  let sqlUserSelect =
 async function Login(req, res, next) {
        return

      }

      if (!result || result.length === 0)
        throw res.status(400).json("Tên đăng nhập hoặc mật khẩu không đúng")

      res.cookie("id", result[0].id)

      return res.status(200).json(result)
    }
  )
}

async function Register(req, res) {
  const { fullname, user_name, password, email } = req.body

  let sqlUserInsert =
    "INSERT INTO users (full_name, user_name, password, email) VALUES (?, ?, ?, ?)"
  connection.query(
    sqlUserInsert,
    [fullname, user_name, password, email],

    function (err, result) {
      if (err) {
        console.log(err)
        return res.status(400).json("Đăng ký không thành công")
      }

      return res.status(200).json("Đăng ký thành công")
    }
  )
}

async function Logout(req, res) {
  const userId = req.cookies.id

  let sqlUserUpdate = "UPDATE users SET token = NULL WHERE id = ?"
  connection.query(sqlUserUpdate, [userId], function (err, result) {
    if (err) {
      console.log(err)
      return res.status(400).json("Đăng xuất không thành công")
    }

    res.clearCookie("id")

    return res.status(200).json("Đăng xuất thành công")
  })
}

async function GetUserById(req, res) {
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
}

export default { Login, Register, Logout, GetUserById }

  
