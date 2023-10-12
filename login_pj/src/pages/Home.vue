<script>
import { Get } from '../utils/api';

export default {

    name: "Home",
    // beforeMount() {
    //     let isLogin = false;
    //     if (!isLogin) {
    //         this.$router.push("/login")
    //     }
    // },
    data(){
        return {
            user: []
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        async getUser() {
            let response = await Get("user/:id")
            console.log(response)
            
        }
    }

}

</script>

<template><h1>Xin Chao </h1></template>
<style></style> 