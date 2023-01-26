<template>
  <div>

    <div v-if="isView">
      <div v-for="transactionType in transactionTypes" class="form-check">
        <div v-if="transactionType.isSelected">
          {{transactionType.typeName}}
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="transactionType in transactionTypes" class="form-check">
        <input v-model="transactionType.isSelected" :disabled="isView" class="form-check-input" type="checkbox">
        <label class="form-check-label">
          {{ transactionType.typeName }}
        </label>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: 'AtmTransactionTypes',

  data: function () {
    return {
      isAdd: Boolean(this.$route.query.isAdd),
      isView: Boolean(this.$route.query.isView),
      transactionTypes: [
        {
          typeId: 0,
          typeName: "",
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
      this.$emit('emitTransactionTypes', this.transactionTypes)
    },

    setTransactionTypes: function (transactionTypes) {
      this.transactionTypes = transactionTypes
    }
  },

  beforeMount() {
    if (this.isAdd ){
      this.getTransactionTypes()
    }
  }
}
</script>
