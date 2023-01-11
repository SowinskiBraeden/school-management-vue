<!-- 
  LoginComp.vue is the general login page that handles
  logging in for any user type such as Student, Teacher and Admin
 -->
<template>
  <div>
    <h1 style="text-transform: capitalize;">{{user}} login</h1>
    <form @submit.prevent="login">
      <input v-model="uid" :placeholder="user.charAt(0).toUpperCase() + user.slice(1) + ' ID'"/>
      <br/>
      <br/>
      <input v-model="password" type="password" placeholder="Password"/>
      <br/>
      <br/>
      <button type="submit">Login</button>
    </form>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'LoginComp',
    props: {
      user: String,
    },
    data: () => {
      return {
        API_URL: process.env.VUE_APP_API_URL,
        message: "", // where we store any error messages etc.
        uid: "",
        password: "",
      };
    },
    methods: {
      async login() {
        const res = await fetch(`${this.API_URL}/${this.user}/login`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uid: this.uid,
            password: this.password,
          }),
        }).then(response => 
          response.json().then(data => ({
            data: data,
            status: response.status,
          })).then(res => res)
        );

        // if (!res.status == 200) // do something
      
        if (res.data.success) this.$router.push(`/${this.user}/dashboard`)
        else this.message = res.data.message;
      },

      async isAuthenticated() {
        const res = await fetch(`${this.API_URL}/${this.user}`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }  
        }).then(response => 
          response.json().then(data => ({
            data: data,
            status: response.status,
          })).then(res => res)
        );

        // if (!res.status == 200) // do something

        if (res.data.success) this.$router.push(`/${this.user}/dashboard`)
      }
    },
    mounted() {
      this.isAuthenticated()
    }
  }
</script>
