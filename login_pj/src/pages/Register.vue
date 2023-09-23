<script></script>
<template>
    <body>
        <div class="container">

            <div class="header">
                <div class="text">Đăng kí tài khoản mới miến phí</div>
            </div>
            <div class="content">
                <div class="input">

                    <div class="name">
                        <div class="text">Họ và tên</div>
                        <input type="text" name="name" id placeholder="Nhập họ và tên của bạn"/>
                    </div>
                    <div class="username">
                        <div class="text">Tên đăng nhập</div>
                        <input type="text" name="uname" id placeholder="Nhập tên đăng nhập của bạn" />
                    </div>
                    <div class="password">
                        <div class="text">Mật khẩu</div>
                        <input type="password" name="password" id placeholder="••••••••" />
                    </div>
                    <div class="confirm">
                        <div class="text">Nhập lại mật khẩu</div>
                        <input type="password" name="cfpassword" id placeholder="••••••••"/>
                    </div>
                        <div class="email">
                        <div class="text">Email</div>
                        <input type="email" name="email" id />
                    </div>
                    <input type="checkbox" name="agree" id/> <span>Tôi đồng ý với các <a href="">điều kiện và điều khoản</a></span>
                </div>
                <div class="btn">
                     <button type="submit" class="">Đăng ký</button>
                     <div class="">Hoặc</div>
                     <div class="social">

                     </div>
                     <div class="text">
                        Bạn đã có tài khoản rồi? <router-link to="/login">Đăng nhập</router-link> 
                     </div>

                </div>


            </div>
        </div>
    </body>
</template>
<style scoped></style>