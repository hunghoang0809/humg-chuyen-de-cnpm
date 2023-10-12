<script>
import { Post } from "../utils/api.js"
export default {
  name: "App",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      email: "",
      cfpassword: "",
      checked: false,
    }
  },
  methods: {
    async register() {
      if (this.cfpassword == this.password) {

        let response = await Post("register", {
          name: this.name,
          username: this.username,
          password: this.password,
          email: this.email
        })
        if (response && response.legth > 1) {
          alert('Đăng kí thành công')
          console.log(response)
        }
        else {
          alert('vui lòng nhập lại thông tin')
        }





      }
      if (this.cfpassword !== this.password) {
        alert('Mật khẩu không khớp')
      }

    }

  },
}

</script>
<template>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body>
    <div class="container">
      <div class="form">
        <div class="header">
          <div class="title">Đăng kí tài khoản mới miễn phí</div>
        </div>
        <div class="content">
          <div class="input">
            <div class="name" id="input">
              <div class="text">Họ và tên</div>
              <input class="text_2" type="text" name="name" placeholder="Nhập họ và tên của bạn" v-model="name" />
            </div>
            <div class="username" id="input">
              <div class="text">Tên đăng nhập</div>
              <input class="text_2" type="text" name="uname" placeholder="Nhập tên đăng nhập của bạn" v-model="username" />
            </div>
            <div class="password" id="input">
              <div class="text">Mật khẩu</div>
              <div style="position: relative;">
                <input class="input_2 text_2" type="password" name="password" placeholder="••••••••" v-model="password" />
                <i class="fa-sharp fa-solid fa-eye-slash fa-rotate-180" style="position: absolute; top: 34%; right: -12px;"></i>
              </div>
            </div>
            <div class="confirm" id="input">
              <div class="text">Nhập lại mật khẩu</div>
              <div style="position: relative;">
                <input class="input_2 text_2" type="password" name="cfpassword" placeholder="••••••••" v-model="cfpassword" />
                <i class="fa-sharp fa-solid fa-eye-slash fa-rotate-180" style="position: absolute; top: 34%; right: -12px;"></i>
              </div>
            </div>
            <div class="email" id="input">
              <div class="text">Email</div>
              <input class="text_2" type="email" name="email" id="text" placeholder="Nhập email của bạn" v-model="email" />
            </div>
            <input style="
                color: white;
                accent-color: rgba(38, 255, 0, 0.926);
                margin-right: 8px;
                width: 20px;
              " type="checkbox" name="agree" v-model="checked" />
            <span style="
                color: #002352;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%;
              ">Tôi đồng ý với các
              <a style="
                  color: #1890ff;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;
                " href="">điều kiện và điều khoản</a></span>
          </div>
          <div class="btn">
            <div id="btn">
              <button class="register" @click="register()" :style="this.username && this.password && this.checked && this.email && this.cfpassword
                ? {}
                : { color: '#BDBDBD', background: '#E5E6EC' }">Đăng ký</button>
            </div>
            
            <div class="login-container">
              <div class="or-divider">
                <div class="or-text">Hoặc</div>
              </div>
              <div class="social_icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-google-plus-g"></i>
                <i class="fa-brands fa-apple"></i>
              </div>
            </div>

            <div class="social"></div>
            <div class="text" style="width: 100%; text-align: center; font-weight: 400;">
              Bạn đã có tài khoản rồi?
              <router-link to="/login" style=" color: #1890ff;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;"><span style="color: white;">.</span> Đăng nhập</router-link>
            </div>
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input::placeholder {
  color: #BDBDBD;
}

.input_2::placeholder {
  letter-spacing: 3px; 
  font-weight: 700;
  font-size: 23px;
}

.social_icon {
margin: auto;
margin-top: 35px;
}

.social_icon i {
  border-radius: 100px;
  border: 1px solid var(--border-input, #EEE);
  font-size: 24px;
  width: 24px;
  padding: 8px;
  text-align: center;
  margin-right: 16px;
  color: #002352;
}

.login-container {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .or-divider {
      display: flex;
      align-items: center;
      margin-top: 20px;
      height: 10px;
      width: 300px;
    }

    .or-divider::before,
    .or-divider::after {
      content: "";
      flex: 1;
      border-bottom: 1px solid #EEEEEE;
      margin: 0 10px;
    }

    .or-text {
      color: #002352;
      font-size: 14px;
      margin: 0 5px;
       white-space: nowrap;
    }

body {
  width: 100%;
  height: 1000px;
  background-color: #f0f2f5;
  font-family: Roboto;
}

.container {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  width: 600px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
}

.title {
  color: #002352;
  text-align: center;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}

#input {
  width: 440px;
  height: 78px;
}

.text {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
}

.text_2 {
  display: flex;
  width: 440px;
  height: 30px;
  padding: 6px 15px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f7f7f7;
  border: transparent;
}

::placeholder {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.btn {
  display: flex;
  width: 432px;
  padding-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
}

#btn {
  display: flex;
  width: 440px;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

#btn button {
  width: 245px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 40px;
  background-color: #00bf6f;
  color: white;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  border: transparent;
}
</style>
