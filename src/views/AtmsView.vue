<template>
  <div>
    <!-- ROW 1   -->
    <div class="row justify-content-center">

      <!-- COL 1 -->
      <div class="col-2">
        <Citiesdropdown @citiesDropdownOnChangeEvent="setSelectedCityId"/>
      </div>

      <div class="col-5">
        <!-- COL 2 -->
        <AtmLocationsTable ref="atmLocations"/>

      </div>

    </div>
  </div>


</template>

<script>
import Citiesdropdown from "@/components/atm/Citiesdropdown.vue";
import AtmLocationsTable from "@/components/atm/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, Citiesdropdown},
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

