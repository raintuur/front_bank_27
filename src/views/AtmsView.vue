<template>
  <div>

    <div class="col-2">
      <CitiesDropdown/>
    </div>


  </div>
</template>

<script>
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";

export default {
  name: "AtmsView",
  components: {CitiesDropdown}

}
</script>