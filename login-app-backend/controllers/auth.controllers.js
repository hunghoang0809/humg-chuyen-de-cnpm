import connection from "../database.js"
async function Login(req, res, next) {
  const { username, password } = req.body

  let sqlUserSelect =
 async function Login(req, res, next) {
        return
    }
  if (!result)
     throw res.status(400).json("Tên đăng nhập hoặc mật khẩu không đúng")

  res.cookie("id", result[0].id)
  
}
async function Register() { }
async function Logout() { }
async function GetUserById() { }
export { Login, Register, Logout, GetUserById }