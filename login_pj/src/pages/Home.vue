<script>
import { Get, Post } from "../utils/api"
import Cookies from 'js-cookie'

export default {
    name: "Home",
    beforeMount() {

        const userId = Cookies.get("id1")
        if (!userId) {
            this.$router.push("/login")

         
        }
        this.getUser()
    },
    data() {
        return {
            user: null,
        }
    },

    methods: {
        async getUser() {
            let response = await Get("profile")
            this.user = response



        },
        async logout() {
            let response = await Post("auth/logout")
            Cookies.remove('id1')
            this.$router.push("/login")
        },
    },
}
</script>

<template>
    <div v-if=(user)>
        <h1>Xin Chao {{user.fullname}} id của bạn là {{ user.id }}   </h1>
        <button type="button" @click="logout()">đăng xuất</button>
    </div>
   
</template>
<style></style>



