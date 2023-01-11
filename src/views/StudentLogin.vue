<template>
  <div>
    <LoginComp user="student"/>
  </div>
</template>

<script>
  import LoginComp from '@/components/LoginComp.vue'

  export default {
    name: 'StudentLogin',
    components: {
      LoginComp,
    },
  };
</script>
