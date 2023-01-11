<template>
  <div>
    <LoginComp user="admin"/>
  </div>
</template>

<script>
  import LoginComp from '@/components/LoginComp.vue'

  export default {
    name: 'AdminLogin',
    components: {
      LoginComp,
    },
  };
</script>
