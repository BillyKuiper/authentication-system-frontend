<template>
<Nav
    :authorized="this.isAuthorized"
    v-on:clearToken="clearToken"
/>
  <main class="form-signin">
   <router-view
       v-on:setToken="setToken"
       v-on:clearToken="clearToken"
   />
  </main>
</template>

<style>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
<script lang="js">
import Nav from "@/components/Nav";

export default {
  components: {Nav},
  data(){
    return{
      isAuthorized: false
    }
  },
  methods:{
    setToken(token){
      console.log(token);
      localStorage.setItem("token", token);
      this.isAuthorized = true;
    },
    clearToken(){
      localStorage.clear();
      this.isAuthorized = false;
    }
  }
}
</script>
