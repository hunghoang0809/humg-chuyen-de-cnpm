const express = require("express")
const router = express.Router()
const method = require({
Login,
  Register,
  Logout,
  GetUserById,
})

const checkLogin= require("checkLogin")

router.post("/login", Login)
router.post("/register", Register)
router.post("/logout", Logout)
router.get("/user/:id", checkLogin, GetUserById)

module.exports = router
