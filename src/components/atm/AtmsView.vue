<template>
  <div>
    <!--  ROW 1 -->
    <div class="row justify-content-center">

      <!-- Col 1 -->
      <div class="col-2">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setSelectedCityId"/>
      </div>


      <!-- Col 2 -->
      <AtmLocationsTable :selected-city-id="selectedCityId"/>
    </div>
  </div>
</template>

<script>


import CitiesDropdown from "@/views/CitiesDropdown.vue";
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
    setSelectedCityId: function (cityId) {
      this.selectedCityId = cityId
    }
  }
}


</script>
