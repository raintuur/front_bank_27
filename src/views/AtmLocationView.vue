<template>
  <div>
    <!-- ROW 1 -->
    <div class="row justify-content-center">

      <!--  COLUMN 1 -->
      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!-- COLUMN 2-->
      <div class="col-3">
        <LocationNameInput :location-name="locationName"/>

        <div class="input-group mb-3">
          <span class="input-group-text">Automaatide arv</span>
          <input type="number" class="form-control">
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
import LocationNameInput from "@/views/AtmLocationNameInput.vue";

export default {
  name: "AtmLocationView",
  components: {LocationNameInput, CitiesDropdown, TransactionTypesCheckBox},
  data: function () {
    return {
      locationName: ''
    }
  },
  methods: {}
}
</script>

