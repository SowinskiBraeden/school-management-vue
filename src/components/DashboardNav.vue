<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/" @click="logout()">Logout</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'DashboardNav',
    data() {
      return {
        API_URL: process.env.VUE_APP_API_URL,
      }
    },
    methods: {
      logout() {
        fetch(`${this.API_URL}/logout`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => 
          response.json().then(data => ({
            data: data,
            status: response.status,
          })).then(res => res)
        );
      }
    }
  }
</script>

<style>
  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
