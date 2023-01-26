<template>
  <div>

    {{roleType}}
    <!-- ROW 1   -->
    <div class="row justify-content-center">

      <!-- COL 1   -->
      <div class="col-2">
        <CitiesDropdown @onChangeEvent="setSelectedCityId"/>
      </div>

      <!-- COL 2   -->
      <div class="col-5">
        <AtmLocationsTable ref="atmLocations"/>
      </div>

    </div>

  </div>
</template>

<script>
import CitiesDropdown from "@/components/CitiesDropdown.vue";
import AtmLocationsTable from "@/components/atm/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, CitiesDropdown},
  data: function () {
    return {
      roleType: sessionStorage.getItem('roleType')
    }
  },
  methods: {
    setSelectedCityId: function (cityId) {
      this.$refs.atmLocations.getAtmLocations(cityId)
    }
  }


}
</script>