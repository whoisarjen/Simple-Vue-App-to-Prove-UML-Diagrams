<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-spacer class="notMobile"></v-spacer>
      <router-link class="notMobile" to="/">Check history</router-link>
      <v-spacer class="notMobile"></v-spacer>
      <router-link class="notMobile" to="/deposit">Deposit</router-link>
      <v-spacer class="notMobile"></v-spacer>
      <router-link class="notMobile" to="/withdraw">Withdraw</router-link>
      <v-spacer class="notMobile"></v-spacer>
      <router-link class="notMobile" to="/loan">Loan</router-link>
      <v-spacer class="notMobile"></v-spacer>
      <router-link class="notMobile" to="/transfer">Transfer</router-link>
      <v-spacer class="notMobile"></v-spacer>
      <router-link class="notMobile" to="/login">Change client</router-link>
      <v-spacer class="notMobile"></v-spacer>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <router-link :to="item.location"><v-list-item-title>{{ item.title }}</v-list-item-title></router-link>
          </v-list-item>
        </v-list>
      </v-menu>
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
    items: [
      { title: 'Check history', location: '/' },
      { title: 'Deposit', location: '/deposit' },
      { title: 'Withdraw', location: '/withdraw' },
      { title: 'Loan', location: '/loan' },
      { title: 'Transfer', location: '/transfer' },
      { title: 'Change client', location: '/login' }
    ]
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

<style>
  @media (max-width: 600px){
    .notMobile{
      display: none;
    }
  }
</style>
