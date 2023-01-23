<template>
  <div class = "row">
    <CityButtons/>
    <div class = col-6>
      <LibraryLocationsTable/>
    </div>

  </div>
</template>

<script>
import CityButtons from "@/components/library/CityButtons.vue";
import LibraryLocationsTable from "@/components/library/LibraryLocationsTable.vue";

export default {
  name: "LibrariesView",
  components: {LibraryLocationsTable, CityButtons}
}
</script>