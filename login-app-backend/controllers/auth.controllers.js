async function Login(req, res) {
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

      if (!result)
        throw res.status(400).json("Tên đăng nhập hoặc mật khẩu không đúng")

      res.cookie("id", result[0].id)

      return res.status(200).json(result)
    }
  )
}

async function Register(req, res) {}

async function Logout(req, res) {}

async function GetUserById(req, res) {}

export default { Login, Register, Logout, GetUserById }
