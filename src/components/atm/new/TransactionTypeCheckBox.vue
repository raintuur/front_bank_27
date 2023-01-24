<template>
  <div>
    <h5>Teenused</h5>
    <div v-for="transactionType in transactionTypes" class="form-check">
      <input v-model="transactionType.isSelected" class="form-check-input" type="checkbox">
      <label class="form-check-label">
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
          typeId: 0,
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

    sendTransactionTypesToParent: function () {
      this.$emit('transactionTypesUpdateEvent', this.transactionTypes)
    }

  },
  beforeMount() {
    this.getTransactionTypes()
  }
}
</script>