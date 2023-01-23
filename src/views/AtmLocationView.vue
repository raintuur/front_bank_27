<template>
  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

<!--    COL 1-->
    <div class="col-2">
      <CitiesDropdown/>
    </div>

<!--    COL 2-->
    <div class="col-2">
      <AtmLocationNameInput :location-name="locationName"/>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">Automaatide arv</span>
        <input type="text" class="form-control" aria-describedby="basic-addon3">
      </div>
      </div>

<!--    COL 3-->
    <div class="col-2">
      <TransactionTypeCheckBox/>
    </div>
  </div>





</div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/TransactionTypeCheckBox.vue";
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
  methods: {}
}
</script>
