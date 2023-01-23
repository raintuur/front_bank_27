<template>
  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!--  COLUMN 2  -->
      <div class="col-2">
        <LocationName :location-name="locationName"/>

        <NumberOfAtms :number-of-atms="numberOfAtms"/>
        <TransactionTypeCheckBox/>


      </div>

      <!--  COLUMN 3  -->
      <div class="col-2">


      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/new/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtms from "@/components/atm/new/number_of/NumberOfAtms.vue";

export default {
  name: "AtmLocationView",
  components: {NumberOfAtms, LocationName, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: 0,

    }
  },
  methods: {}
}
</script>
