<template>
  <div class="table-container col col-10">

    <!--  Pooleli LibrariesTable.vue!!!  -->

    <LibrariesFilterButtons @citiesButtonsOnChangeEvent="setSelectedCityId"/>

    <LibrariesTable ref="librariesInCity"/>

  </div>
</template>

<script>
import LibrariesFilterButtons from "@/components/library/LibrariesFilterButtons.vue";
import LibrariesTable from "@/components/library/LibrariesTable.vue";

export default {
  name: "LibrariesView",
  components: {LibrariesTable, LibrariesFilterButtons},
  methods: {
    setSelectedCityId: function (cityId) {
      this.$refs.librariesInCity.getLibraries(cityId)
    }
  }
}
</script>

<style>

.table-container {
  display: flex;
  justify-content: space-around;
}
.table-margin {
  margin-right: 50px;
}

</style>