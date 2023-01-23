<template>
  <div>
    <!-- ROW 1 -->
    <div class="row justify-content-center">

      <!--  COLUMN 1 -->
      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!-- COLUMN 2-->
      <div class="col-2">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">Asukoht</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">Automaatide arv</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>

        <div>
          <TransactionTypesCheckBox/>
        </div>

      </div>

      <!-- COLUMN 3 -->
      <div class="col-2">



      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypesCheckBox from "@/views/TransactionTypesCheckBox.vue";
import CitiesDropdown from "@/views/CitiesDropdown.vue";

export default {
  name: "AtmLocationView",
  components: {CitiesDropdown, TransactionTypesCheckBox},
  data: function () {
    return {}
  },
  methods: {}
}
</script>

