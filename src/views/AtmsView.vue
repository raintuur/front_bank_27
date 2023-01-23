<template>
  <div>
<!--Row 1-->
    <div class="row justify-content-center">

      <!--TABEL-->
      <div class="col-3">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setSelectedCityId"/>
      </div>
      <div class = "col-5">
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
      selectedCityId: 0
    }
  },
  methods: {
    setSelectedCityId: function (cityId) {
      this.$refs.atmLocations.getAtmLocations(cityId)
    }
  }
}
</script>
