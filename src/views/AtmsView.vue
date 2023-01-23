<template>
  <div class="row ">
    <div class="col col-2">
      <CitiesDropdown @citiesDropdownOnChangeEvent="setSelectedCityId"/>
    </div>
    <div class="col col-6 tablediv">
      <AtmLocationsTable ref="atmLocations"/>
    </div>
  </div>
</template>

<script>
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationsTable from "@/components/atm/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, CitiesDropdown},
  methods: {
    setSelectedCityId: function (cityId) {
      this.$refs.atmLocations.getAtmLocations(cityId)
    }
  }
}
</script>

<style scoped>

.tablediv {
  margin-left: auto;
  margin-right: auto;
}

</style>