<template>
<div>
  <div class="col-3 justify-content-center">
    <CitiesDropdown/>
  </div>
  <div>
    <AtmLocationsTable/>
  </div>
</div>
</template>

<script>
import CitiesDropdown from "@/components/ATM/CitiesDropdown.vue";
import AtmLocationsTable from "@/components/ATM/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, CitiesDropdown},
}
</script>