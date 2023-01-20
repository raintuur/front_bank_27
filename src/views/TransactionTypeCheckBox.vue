<template>
  <div>
    <div v-for="transactionType in transactionTypes" class="form-check">
      <input v-model="transactionType.isSelected" class="form-check-input" type="checkbox" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        {{transactionType.typeName}}
      </label>
    </div>
  </div>

</template>
<script>
export default {
  name: 'TransactionTypeCheckBox',
  data: function () {
    return {
      transactionTypes: [
        {
          typeId: 1,
          typeName: '',
          isSelected: false
        }
      ]
    }
  },
  methods: {
    getTransactionTypes: function () {
      this.$http.get("/atm/transaction-types")
          .then(response => {
            this.transactionTypes = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getTransactionTypes()
  }
}
</script>
