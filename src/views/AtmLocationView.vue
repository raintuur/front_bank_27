<template>
  <div>


    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <div class="col-2">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">Asukoht</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">Automaatide arv</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <TransactionTypeCheckBox/>

        <!--   COLUMN 3     -->

        <div class="col-2">

        </div>
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
