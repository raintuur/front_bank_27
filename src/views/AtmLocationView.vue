<template>
  <div>

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
  name: "AtmLocationView",
  components: {TransactionTypeCheckBox},
  data: function () {
    return {
    }
  },
  methods: {

  }
}
</script>
