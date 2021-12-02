<template>
    <div class="CheckHistory">
        <h1>This is an history page</h1>
        <h4>Balance: {{ balance }}PLN : Coming: {{load}}PLN </h4>
        <h5>Balance zlicza tylko rekordy, które mają datę niższą niż obecna. Historia pokazuje wszystko, więc balance może != suma historii (z powodu Loan)</h5>
         <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="'https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg'"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
    </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    user_ID: 0,
    balance: 0,
    load: 0
  }),
  async mounted () {
    if (!window.localStorage.getItem('user_ID')) {
      this.$router.push('login')
    } else {
      this.user_ID = JSON.parse(window.localStorage.getItem('user_ID'))
      let history = await this.$getAllIndexedDB('history')
      history = history.sort(function (a, b) {
        const dateA = new Date(a.whenAdded).getTime()
        const dateB = new Date(b.whenAdded).getTime()
        return dateA < dateB ? 1 : -1 // ? -1 : 1 for ascending/increasing order
      })
      if (history.length > 0) {
        for (let i = 0; i < history.length; i++) {
          if (history[i].sender_ID === this.user_ID || history[i].receiver_ID === this.user_ID) {
            if (history[i].sender_ID === this.user_ID) {
              // -
              history[i].whenAdded <= new Date() ? this.balance += history[i].amount * -1 : this.load += history[i].amount * -1
              this.items.push({
                title: history[i].type + ': ' + history[i].amount * -1,
                subtitle: history[i].whenAdded
              })
            } else {
              // +
              history[i].whenAdded <= new Date() ? this.balance += history[i].amount : this.load += history[i].amount
              this.items.push({
                title: history[i].type + ': ' + history[i].amount,
                subtitle: history[i].whenAdded
              })
            }
          }
        }
      }
    }
  }
}
</script>
