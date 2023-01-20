<template>
  <div>

    <div class="row justify-content-center">

      <div class="col-2">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setSelectedCityId"/>
      </div>

<!--      Linn-->
<!--      Asukoht-->
<!--      Teenused-->

      <!--  TABEL  -->
      <div class="col-5">

        <AtmLocationsTable :selected-city-id="selectedCityId"/>
      </div>

    </div>


  </div>
</template>

<script>
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationsTable from "@/components/atm/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, CitiesDropdown},
  data: function () {
    return {
      selectedCityId: 0
    }
  },
  methods: {
    setSelectedcityId: function (cityId) {

      this.selectedCityId = cityId
    }
  }

}
</script>