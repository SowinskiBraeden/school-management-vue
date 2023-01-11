<template>
  <DashboardNav />
  <h1>Admin Dashboard</h1>
  <UserModel v-if="admin!={}" :user="admin" :uid="admin.aid"/>
</template>

<script>
  import UserModel from '@/components/UserModel.vue';
  import DashboardNav from '@/components/DashboardNav.vue';

  export default {
    name: 'AdminDashboard',
    components: {
      UserModel,
      DashboardNav,
    },
    data: () => {
      return {
        API_URL: process.env.VUE_APP_API_URL,
        admin: {},
        message: "", // where we store any error messages etc.
      };
    },
    methods: {
      async isAuthenticated() {
        const res = await fetch(`${this.API_URL}/admin`, {
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

        if (res.data.success) {
          // set local data
          this.admin = res.data.result;
        } else this.$router.push('/admin/login');
      }
    },
    created() {
      this.isAuthenticated()
    }
  }
</script>
