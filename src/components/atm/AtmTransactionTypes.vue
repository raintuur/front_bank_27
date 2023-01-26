<template>
  <div>
    <h5>Teenused:</h5>

<!--    vaatamine-->
    <div v-if="isView" >
     <div v-for="transactionType in transactionTypes">
       <div v-if="transactionType.isSelected">
         {{transactionType.typeName}}
       </div>
     </div>
    </div>
<!--    lisamine/muutmine -->
    <div v-else>
      <div v-for="transactionType in transactionTypes" class="form-check">
        <input v-model="transactionType.isSelected" class="form-check-input" type="checkbox">
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
    setTransactionTypes(transactionTypes) {
      this.transactionTypes = transactionTypes
    },

    emitTransactionTypes: function () {
      this.$emit('emitTransactionTypesEvent', this.transactionTypes)
    }

  },
  beforeMount() {
    if (this.isAdd) {
      this.getTransactionTypes()
    }

  }
}
</script>