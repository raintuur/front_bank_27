<template>
  <div>
    <!--  ROW 1 -->
    <div class="row justify-content-center">


      <div class="col-2">
        <CitiesDropdown/>
      </div>


      <!-- TABEL -->
      <AtmLocationsTable/>
    </div>
  </div>
</template>

<script>


import CitiesDropdown from "@/views/CitiesDropdown.vue";
import AtmLocationsTable from "@/components/atm/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, CitiesDropdown},

}



</script>
