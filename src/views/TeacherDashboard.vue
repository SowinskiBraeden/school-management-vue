<template>
  <DashboardNav />
  <h1>Teacher Dashboard</h1>
  <UserModel v-if="teacher!={}" :user="teacher" :photo="photo" :uid="teacher.School.tid"/>
</template>

<script>
  import UserModel from '@/components/UserModel.vue';
  import DashboardNav from '@/components/DashboardNav.vue';

  export default {
    name: 'TeacherDashboard',
    components: {
      UserModel,
      DashboardNav,
    },
    data: () => {
      return {
        API_URL: process.env.VUE_APP_API_URL,
        teacher: {},
        photo: {},
        message: "", // where we store any error messages etc.
      };
    },
    methods: {
      async isAuthenticated() {
        const res = await fetch(`${this.API_URL}/teacher`, {
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
          this.teacher = res.data.response.teacher;
          this.photo = res.data.response.photo;
        } else this.$router.push('/teacher/login');
      }
    },
    created() {
      this.isAuthenticated()
    }
  }
</script>
