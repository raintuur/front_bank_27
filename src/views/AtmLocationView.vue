<template>
  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!--  COLUMN 2  -->
      <div class="col-2">
        <div class="input-group mb-3">
          <span class="input-group-text">Asukoht</span>
          <input type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Automaatide arv</span>
          <input type="number" class="form-control">
        </div>
        <TransactionTypeCheckBox/>


      </div>

      <!--  COLUMN 3  -->
      <div class="col-2">


      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/views/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";

export default {
  name: "AtmLocationView",
  components: {CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {}
  },
  methods: {}
}
</script>
