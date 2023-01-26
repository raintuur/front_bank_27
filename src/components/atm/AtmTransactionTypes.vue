<template>
  <div>
    <h5>Teenused:</h5>
    <div v-if="isView">
      <div v-for="transactionType in transactionTypes">
        <div v-if="transactionType.isSelected">
          {{transactionType.typeName}}
        </div>
      </div>

      <div v-if="!isView" v-for="transactionType in transactionTypes" class="form-check">
        <input v-model="transactionType.isSelected" :disabled="isView" class="form-check-input" type="checkbox">
        <label class="form-check-label">
          {{transactionType.typeName}}
        </label>
      </div>
      <div v-else>

      </div>

    </div>


  </div>
</template>
<script>
export default {
  name: 'AtmTransactionTypes',
  props: {
    isAdd: Boolean,
    isView: Boolean
  },
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

    emitTransactionTypes: function () {
      this.$emit('emitTransactionTypesEvent', this.transactionTypes)
    },
    setTransactionTypes(transactionTypes) {
      this.transactionTypes = transactionTypes
    }
  },
  beforeMount() {
    if (this.isAdd) {
      this.getTransactionTypes()
    }
  }
}
</script>