<template>
<div>

  <!--  ROW 1  -->
  <div class="row justify-content-center">
    <div class="col-2">
      <CitiesDropdown/>
    </div>
<div class="col-2">
  <AtmLocationNameInput :location-name="locationName"/>

  <div class="input-group mb-3">
    <span class="input-group-text">Automaatide arv</span>
    <input type="number" class="form-control">
  </div>

<div>
  <TransactionTypeCheckBox/>
</div>
  </div>


    </div>
  </div>





</div>
</template>

<script>
import TransactionTypeCheckBox from "@/views/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationNameInput from "@/components/atm/AtmLocationNameInput.vue";

export default {
  name: "AtmLocationView",
  components: {AtmLocationNameInput, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
locationName: ''
    }
  },
  methods: {

  }
}
</script>
