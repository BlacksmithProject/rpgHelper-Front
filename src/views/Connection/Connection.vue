<template>
  <div class="home flex-1 flex">
    <div class="container mx-auto flex-1 flex flex-col sm:flex-col-reverse justify-center">
      <sign-up v-if='displayRegistration'></sign-up>
      <sign-in v-else></sign-in>
      <nav class="mb-12 sm:mb-0 sm:mt-12 w-full text-center">
        <span class="cursor-pointer p-2" :class="{ darkBackground: displayRegistration }" @click='displayRegistration = true'>Création de compte</span> /
        <span class="cursor-pointer p-2" :class="{ darkBackground: !displayRegistration }"  @click='displayRegistration = false'>Connexion</span>
      </nav>
    </div>
  </div>
</template>

<script>
import signIn from '@/views/Connection/partials/SignIn'
import signUp from '@/views/Connection/partials/SignUp'

export default {
  name: 'home',
  components: {
    signIn,
    signUp
  },
  data: function () {
    return {
      displayRegistration: true
    }
  },
  created () {
    if (this.$store.getters.isAuthenticated) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
  .darkBackground {
    background-color: $dark-grey;
    color: $light-grey;
  }
</style>
