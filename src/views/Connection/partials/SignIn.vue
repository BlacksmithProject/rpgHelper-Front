<template>
  <div class="flex flex-1 flex-col justify-center items-center">
    <div class="mb-8 w-full sm:w-1/3">
      <p class="form-notification p-3 text-center w-full" v-if="error.message" v-text="error.message"></p>
    </div>
    <form class="w-full flex flex-1 flex-col justify-center items-center" @submit.prevent="signIn">
      <input-field
        class="w-full sm:w-1/3 relative"
        :type='"email"'
        :placeholder='"Email"'
        :error='error.email'
        v-model='email'>
      </input-field>
      <input-field
        class="mt-12 w-full sm:w-1/3 relative"
        :type='"password"'
        :placeholder='"Mot de passe"'
        :error='error.password'
        v-model='password'>
      </input-field>
      <div class="mt-12 flex w-full sm:w-1/3">
        <button
          class="uppercase p-2 font-bold shadow-md w-full submit-button"
          :class="{ 'loading-button': this.loading }">
            <span v-if="this.loading">Connection en cours</span>
            <span v-else>Se connecter</span>
          </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import InputField from '@/components/form/InputField'

export default {
  name: 'SignUp',
  components: {
    InputField
  },
  data: () => {
    return {
      email: '',
      password: '',
      error: {
        email: null,
        password: null,
        message: null
      },
      loading: false
    }
  },
  computed: {
    formData: function () {
      let formData = new FormData()
      formData.append('email', this.email)
      formData.append('password', this.password)

      return formData
    }
  },
  methods: {
    signIn: function () {
      this.clearError()
      this.loading = true

      axios.get(process.env.VUE_APP_API_URL + '/users', {
        auth: {
          username: this.email,
          password: this.password
        }
      })
        .then((response) => {
          this.$store.dispatch('signIn', response.data.user)
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          this.loading = false
          if (error.response.data.hasOwnProperty('email')) {
            this.error.email = error.response.data.email
          }
          if (error.response.data.hasOwnProperty('password')) {
            this.error.password = error.response.data.password
          }

          if (error.response.data.hasOwnProperty('message')) {
            this.error.message = error.response.data.message
          }
        })
    },
    clearError: function () {
      this.error.email = null
      this.error.password = null
      this.error.name = null
      this.error.message = null
    }
  }
}
</script>
