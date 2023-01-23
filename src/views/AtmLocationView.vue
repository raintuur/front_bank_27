<template>
  <div>

  <div class="row justify-content-center">
<!--cloumn1-->
    <div class="col-2">
      <CitiesDropdown/>
    </div>
<!--column2-->
    <div class="col-2">
      <LocationName :location-name="locationName"/>

      <NumberOfAtms :number-of-atms="numberOfAtms"/>
      <TransactionTypeCheckBox/>
    </div>

<!--    column 3 -->
    <div class="col-2">

    </div>
  </div>



  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/new/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtms from "@/components/atm/new/number_of/NumberOfAtmsInput.vue";

export default {
  name: "AtmLocationView",

  components: {NumberOfAtms, LocationName, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: ''
    }
  },
  methods: {

  }
}
</script>
