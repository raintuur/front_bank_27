<template>
  <div>


    <!--  ROW 1  -->
    <div class="row justify-content-center">
      <div class="col-2">

        <TransactionTypeCheckBox/>

      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/views/TransactionTypeCheckBox.vue";

export default {
  name: "AtmLocationView"
  data: function () {
    return {
      transactionTypes: [
        {
          "typeId": 0,
          "typeName": '',
          "isSelected": false
        }
      ]
    }
  },
  components: {TransactionTypeCheckBox},
  methods:{

}
}
</script>
