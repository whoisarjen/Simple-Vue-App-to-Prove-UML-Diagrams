<template>
    <div class="Login">
        <h1>This is an login page</h1>
        <h4>Dowolny ciąg liczb np. "3432234", który w teorii ma być adresem bankowym użytkownika.</h4>
        <v-form>
            <v-container>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="user_ID"
                    label="User ID"
                ></v-text-field>
                </v-col>
            </v-row>
            </v-container>
            <v-btn
            color="primary"
            class="mr-4"
            @click="submit"
            >
            Submit
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
  data: () => ({
    user_ID: 3432234
  }),
  methods: {
    async submit () {
      if (this.user_ID > 0) {
        window.localStorage.setItem('user_ID', JSON.stringify(this.user_ID))
        if (!window.localStorage.getItem('DB_FINE')) await this.createIndexedDB()
        this.$router.push('/')
      }
    },
    async createIndexedDB () {
      const request = window.indexedDB.open('uml')
      return new Promise(resolve => {
        request.onupgradeneeded = function (event) {
          const db = event.target.result
          const objectStore = db.createObjectStore('history', { keyPath: '_id' })
          window.localStorage.setItem('DB_FINE', true)
          objectStore.transaction.oncomplete = async () => resolve()
        }
      })
    }
  },
  mounted () {
    window.localStorage.removeItem('user_ID')
  }
}
</script>
