const express = require("express")
const router = express.Router()

import {
  Login,
  Register,
  Logout,
  GetUserById,
} from "../controllers/auth.controllers.js"
import { checkLogin } from "../middlewares/checkLogin.js"

router.post("/login", Login)
router.post("/register", Register)
router.post("/logout", Logout)
router.get("/user/:id", checkLogin, GetUserById)

module.exports = router
