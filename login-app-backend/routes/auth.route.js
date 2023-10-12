import express from "express"
import {
  Login,
  Register,
  Logout,
  GetUserById,
} from "../controllers/auth.controllers.js"
import CheckLogin from "../middlewares/checkLogin.js"

const router = express.Router()

router.post("/login", Login)
router.post("/register", Register)
router.post("/logout", Logout)
router.get("/user/:id", CheckLogin, GetUserById)

export default router
