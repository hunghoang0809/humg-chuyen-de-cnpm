export default function CheckLogin(req, res, next) {
  const userId = req.cookies.id
  if (userId) {
    req.userId = userId
    next()
  } else {
    res.status(401).json("Unauthorized")
  }
}
