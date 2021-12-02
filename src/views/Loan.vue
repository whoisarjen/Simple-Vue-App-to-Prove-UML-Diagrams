<template>
    <div class="Loan">
        <h1>This is an loan page</h1>
        <h4>Spłata będzie odłożona na kolejny miesiąc, więć chociaż będzie ona w bazie danych, to użytkownik zobaczy ją dopiero w momencie, kiedy obecna data będzie >= niż data raty tj. czas spłacić ratę. Pracownik widzi wszystkie rekordy, ale nie są one wlicane w saldo konta. Ma to mu pozwolić lepiej podejmować decyzję o rozpoczęciu transakcji.</h4>
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

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    disabled
                    v-model="installment"
                    label="How many months"
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
    amount: 0,
    installment: 1
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
          type: 'Loan'
        }
        await this.$addIndexedDB('history', [object])
        const date = new Date()
        const object2 = {
          _id: new Date().getTime() + 1,
          whenAdded: new Date(date.setDate(date.getDate() + 30)),
          sender_ID: this.user_ID,
          receiver_ID: 0,
          worker_ID: this.worker_ID,
          amount: this.amount,
          note: '',
          type: 'Loan'
        }
        this.$addIndexedDB('history', [object2])
        const doc = new this.JSPDF()
        doc.text(JSON.stringify([object, object2], null, 4), 10, 10)
        doc.save('loan.pdf')
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
