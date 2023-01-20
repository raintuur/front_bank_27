<template>
  <div>
    <div class="row justify-content-center">


      <div class="col-2">
        <Citiesdropdown/>
      </div>

      <div class="col-5">

        <AtmLocationsTable/>

      </div>

    </div>
  </div>


</template>

<script>
import Citiesdropdown from "@/components/atm/Citiesdropdown.vue";
import AtmLocationsTable from "@/components/atm/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, Citiesdropdown}


}

</script>

