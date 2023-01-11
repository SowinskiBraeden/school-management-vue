<template>
  <div>
    <LoginComp user="teacher"/>
  </div>
</template>

<script>
  import LoginComp from '@/components/LoginComp.vue'

  export default {
    name: 'TeacherLogin',
    components: {
      LoginComp,
    },
  };
</script>
