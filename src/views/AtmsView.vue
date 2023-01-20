<template>
  <div>
    <!-- ROW 1   -->
    <div class="row justify-content-center">

      <!-- COL 1   -->
      <div class="col-2">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setSelectedCityId"/>
      </div>

      <!-- COL 2   -->
      <div class="col-5">
        <AtmLocationsTable ref="atmLocations"/>
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
    }
  },
  methods: {
    setSelectedCityId: function (cityId) {
      this.$refs.atmLocations.getAtmLocations(cityId)
    }
  }


}
</script>