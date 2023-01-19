<template>
  <div>

    <div class="col-3">
      <CitiesDropdown :cities="cities"/>

    </div>




  </div>
</template>

<script>


import CitiesDropdown from "@/views/CitiesDropdown.vue";

export default {
  name: "AtmsView",
  components: {CitiesDropdown},

}
</script>
