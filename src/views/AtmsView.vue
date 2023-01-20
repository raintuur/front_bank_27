<template>
  <div>
    <div class="row justify-content-center">

      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!--  TABEL -->
      <div class="col-5">

        <AtmLocationsTable/>

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

}
</script>