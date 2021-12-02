<template>
    <div class="Deposit">
        <h1>This is an deposit page</h1>
        <v-form>
            <v-container>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    disabled
                    v-model="user_ID"
                    label="User ID"
                ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    disabled
                    v-model="worker_ID"
                    label="Worker ID"
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="amount"
                    label="Amount"
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
    user_ID: 0,
    worker_ID: 64353523,
    amount: 0
  }),
  methods: {
    async submit () {
      this.amount = Math.round(this.amount * 100) / 100
      if (this.amount > 0) {
        const object = {
          _id: new Date().getTime(),
          whenAdded: new Date(),
          sender_ID: 0,
          receiver_ID: this.user_ID,
          worker_ID: this.worker_ID,
          amount: this.amount,
          note: '',
          type: 'Deposit'
        }
        await this.$addIndexedDB('history', [object])
        const doc = new this.JSPDF()
        doc.text(JSON.stringify(object, null, 4), 10, 10)
        doc.save('deposit.pdf')
        alert('Dodane!')
        if (object.amount >= 10000) alert('Zgłoszone!')
        this.amount = 0
      } else alert('Nie może być <= 0')
    }
  },
  mounted () {
    if (window.localStorage.getItem('user_ID')) {
      this.user_ID = JSON.parse(window.localStorage.getItem('user_ID'))
    }
  }
}
</script>
