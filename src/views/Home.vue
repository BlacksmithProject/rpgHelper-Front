<template>
  <div class="home flex-1 flex">
    <div class="container mx-auto flex-1 flex flex-col justify-center">
      <button class="uppercase p-3 font-bold shadow-md sm:w-1/3 mx-auto" @click="logOut">Se déconnecter</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    logOut: function () {
      this.$store.dispatch('logOut')
      this.$router.push({ name: 'connection' })
    }
  },
  created () {
    if (!this.$store.getters.isAuthenticated) {
      this.$router.push({ name: 'connection' })
    }
  }
}
</script>

<style lang="scss">
  button {
    background-color: $light-grey;
    color: $dark-grey;
  }
</style>
