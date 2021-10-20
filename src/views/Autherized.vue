<template>
<h1>Am i Autherized?</h1>
  <button @click="submitToken">Autherize</button>
</template>

<script>
import axios from 'axios'
export default {
  name: "Autherized",
  methods:{
   submitToken(){

     const token = localStorage.getItem("token");

     const config = {
       headers: { Authorization: `Bearer ` + token }
     };

     axios.get("https://localhost:44368/Authentication/auth",  config)
         .then((response) => {
           console.log(response.data);
         })
   }
  }
}
</script>

<style scoped>

</style>
