<template>
  <div>

    <!--      ROW 1 -->

    <div class="row justify-content-center">
      <div class="col-2">
        <CitiesDropdown/>

      </div>
      <!--  COLUMN 2 -->
      <div class="col-2">
        <AtmLocationNameInput :location-name="locationName"/>

        <NumberOfAtmsInput :number-of-atms="numberOfAtms"/>

        <TransactionTypeCheckBox/>

      </div>

      <!--COLUMN 3-->
      <div class="col-2">


      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationNameInput from "@/components/atm/AtmLocationNameInput.vue";
import NumberOfAtmsInput from "@/components/atm/NumberOfAtmsInput.vue";

export default {
  name: "AtmLocationView",
  components: {NumberOfAtmsInput, AtmLocationNameInput, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: 0,
    }
  },
  methods: {}
}
</script>
