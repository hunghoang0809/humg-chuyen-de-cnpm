<script></script>
<template>
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
              <input type="text" name="name" id="text" placeholder="Nhập họ và tên của bạn" />
            </div>
            <div class="username" id="input">
              <div class="text">Tên đăng nhập</div>
              <input type="text" name="uname" id="text" placeholder="Nhập tên đăng nhập của bạn" />
            </div>
            <div class="password" id="input">
              <div class="text">Mật khẩu</div>
              <input type="password" name="password" id="text" placeholder="••••••••" />
            </div>
            <div class="confirm" id="input">
              <div class="text">Nhập lại mật khẩu</div>
              <input type="password" name="cfpassword" id="text" placeholder="••••••••" />
            </div>
            <div class="email" id="input">
              <div class="text">Email</div>
              <input type="email" name="email" id="text" placeholder="Nhập email của bạn" />
            </div>
            <input style="
                accent-color: rgba(38, 255, 0, 0.926);
                margin-right: 8px;
                width: 20px;
              " type="checkbox" name="agree" id />
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
              <button type="submit" class="">Đăng ký</button>
            </div>
            <div class="" style="
                display: flex;
                width: 440px;
                height: 86px;
                justify-content: center;
                align-items: center;
              ">
              Hoặc
            </div>
            <div class="social"></div>
            <div class="text" style="width: 100%; text-align: center; font-weight: 400;">
              Bạn đã có tài khoản rồi?
              <router-link to="/login" style=" color: #1890ff;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;">Đăng nhập</router-link>
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

#text {
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
  background: #e5e6ec;
  color: #bdbdbd;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  border: transparent;
}
</style>
