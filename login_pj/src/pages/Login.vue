<script></script>

<template>
    
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
                <input type="text" name="username" id="" />
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
                  <input type="password" name="password" id="" />
                </div>
              </div>
              <div class="login_btn">
                <button class="login">Đăng nhập</button>
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
                Bạn chưa có tài khoản?<span><a href="">Đăng ký ngay!</a></span>
              </div>
            </div>
          </div>
        </div>
      </body>

</template>

<style>
*{
    text-decoration: none;
    padding: 0;
    margin: 0;
}
body{
    width: 100%;
    height: 1000px;
}
.container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form{
   
    border: 1px solid #CCC;
    width: 500px;
    height: 458px;
    
}
.header{
    padding: 10px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    border-bottom:1px solid #CCC ;
}
.content{
   width: 100%;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 3px;
}
a{
    color: rgb(2, 142, 207);
    font-size: 14px;
}
.name {
    width: 75%;
    padding-bottom: 30px;
}
.password{
    width: 75%;
    padding-bottom: 30px;
}

 input{
    width: 100%;
    height: 35px;
    border: transparent;
    background-color: #f4f0f0;
    border-radius: 8px;
}
button{
    border: transparent;
    border-radius: 5px;
}
.login_btn{
    width: 75%;
   
}
.login{
    width: 100%;
    height: 35px;
    background-color:#00BF6F ;
    border-radius: 40px;
    color: white;
    margin-bottom: 20px;
}
.text{
    width: 100%;
    text-align: center;
    padding-bottom:10px ;
    color: #000000A6;
    font-weight: 200;
}
.sc{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.sc button{
    padding:0 20px;
}
.fb{
    width: 45%;
    height: 30px;
    border-radius: 30px;
}
.gg{
    width: 45%;
    height: 30px;
    border-radius: 30px;
}

</style>
