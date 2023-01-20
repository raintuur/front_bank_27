<template>
  <div>
    <!-- ROW 1 -->
    <div class="row justify-content-center">
      <div class="col-3">

        <TransactionTypesCheckBox/>

      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypesCheckBox from "@/views/TransactionTypesCheckBox.vue";

export default {
  name: "AtmLocationView",
  components: {TransactionTypesCheckBox},
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

  }
}
</script>

