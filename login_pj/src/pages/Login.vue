<script>
import { Post } from "../utils/api.js"
export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async login() {
      if (this.username && this.password) {
        let response = await Post("login", {
          username: this.username,
          password: this.password,
        })
        if (response.msg === "Dang nhap thanh cong") {
          this.$router.push("/")
          isLogin = true
        } else {
          alert("Sai tai khoan mat khau")
        }
      }
    },
  },
}
</script>

<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer" />
  </head>

  <body>
    <div class="container">
      <div class="form">
        <div class="header">
          <button class="close_icon">
            <i
              class="fa-solid fa-x"
              style="position: absolute; right: 0; padding-right: 10px"></i>
          </button>
          <h4>Đăng nhập</h4>
        </div>
        <div class="content">
          <div class="name">
            <div class="title">Tên đăng nhập</div>
            <input type="text" name="username" id="user" v-model="username" />
          </div>
          <div class="password">
            <div
              style="
                display: flex;
                justify-content: space-between;
                width: 100%;
              ">
              <div class="title">Mật khẩu</div>
              <div><a href="">Quên mật khẩu?</a></div>
            </div>
            <div>
              <input
                style="position: relative"
                type="password"
                name="password"
                id="pass"
                v-model="password" />
              <i
                class="fa-sharp fa-solid fa-eye-slash fa-rotate-180"
                style="position: absolute; right: 0"></i>
            </div>
          </div>
          <div class="login_btn">
            <button
              class="login"
              @click="login()"
              :style="
                this.username && this.password
                  ? {}
                  : { color: '#E5E6EC', background: '#BDBDBD' }
              ">
              Đăng nhập
            </button>
            <div class="text">hoặc đăng nhập bằng</div>
            <div class="sc">
              <button class="fb">
                <i
                  class="fa-brands fa-facebook-f fa-lg"
                  style="color: #165eda; padding-right: 5px"></i
                >Facebook
              </button>
              <button class="gg">
                <i
                  class="fa-brands fa-google fa-lg"
                  style="padding-right: 5px"></i
                >Google
              </button>
            </div>
          </div>
          <div>
            Bạn chưa có tài khoản?<span
              ><router-link to="/register">Đăng ký ngay!</router-link></span
            >
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  font-family: Roboto;
}

body {
  width: 100%;
  height: 1000px;
  background-color: #f0f2f5;
}

.container {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 530px;
  height: 520px;
  border-radius: 14px;
  background: var(--light-greyscale-greyscale-200, #fff);
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
}

.header {
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid #e5e6ec;
  height: 40px;
}

.content {
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 3px;
}

a {
  color: rgb(2, 142, 207);
  font-size: 14px;
}

.name {
  width: 75%;
  padding-bottom: 30px;
}

.password {
  width: 75%;
  padding-bottom: 30px;
}

input {
  width: 100%;
  height: 35px;
  border: transparent;
  background-color: #f4f0f0;
  border-radius: 8px;
}

button {
  border: transparent;
  border-radius: 5px;
}

.login_btn {
  width: 75%;
}

.login {
  width: 100%;
  height: 35px;
  background-color: #00bf6f;
  border-radius: 40px;
  color: white;
  margin-bottom: 20px;
}

.text {
  font-size: 14px;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  color: #000000a6;
  font-weight: 500;
}

.sc {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.sc button {
  padding: 0 20px;
}

.fb {
  width: 45%;
  height: 30px;
  border-radius: 30px;
}

.gg {
  width: 45%;
  height: 30px;
  border-radius: 30px;
}
</style>
