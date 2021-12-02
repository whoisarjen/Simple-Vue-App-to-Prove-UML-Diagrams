<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-spacer></v-spacer>
      <router-link to="/">Check history</router-link>
      <v-spacer></v-spacer>
      <router-link to="/deposit">Deposit</router-link>
      <v-spacer></v-spacer>
      <router-link to="/withdraw">Withdraw</router-link>
      <v-spacer></v-spacer>
      <router-link to="/loan">Loan</router-link>
      <v-spacer></v-spacer>
      <router-link to="/transfer">Transfer</router-link>
      <v-spacer></v-spacer>
      <router-link to="/login">Change client</router-link>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  watch: {
    $route () {
      if (!window.localStorage.getItem('user_ID')) {
        this.$router.push('login')
      }
    }
  }
}
</script>
