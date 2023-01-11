<template>
  <div>
    <!-- Profile image renderer -->
    <div v-if="photo!={}">
    </div>
    <!-- Default profile image render if none -->
    <div v-else>
      <p>No photo</p>
    </div>

    <!-- General user data-->
    <h2 v-if="user.personal">{{ user.personal.firstname + ' ' + user.personal.lastname }}</h2>
    <h2 v-else>{{ user.firstname + ' ' + user.lastname }}</h2>
    <h2>{{ uid }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'UserModel',
    props: {
      user: {
        type: Object,
        default: () => ({}),
      },
      photo: {
        type: Object,
        default: () => ({}),
      },
      uid: String
    },
  }
</script>
