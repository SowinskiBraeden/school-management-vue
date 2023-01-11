<template>
  <DashboardNav />
  <h1>Dashboard</h1>
  <UserModel v-if="student!={}" :user="student" :photo="photo" :uid="student.School.sid"/>
</template>

<script>
  import UserModel from '@/components/UserModel.vue';
  import DashboardNav from '@/components/DashboardNav.vue';

  export default {
    name: 'StudentDashboard',
    components: {
      UserModel,
      DashboardNav,
    },
    data: () => {
      return {
        API_URL: process.env.VUE_APP_API_URL,
        student: {},
        locker: {},
        contacts: [],
        photo: {},
        message: "", // where we store any error messages etc.
      };
    },
    methods: {
      async isAuthenticated() {
        const res = await fetch(`${this.API_URL}/student`, {
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
          this.student = res.data.response.student;
          this.locker = res.data.response.locker;
          this.contacts = res.data.response.contacts;
          this.photo = res.data.response.photo;
        } else this.$router.push('/student/login');
      }
    },
    created() {
      this.isAuthenticated()
    }
  }
</script>
