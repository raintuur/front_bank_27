<template>
  <div>
    <div class="col-3">
      <CitiesDropdown/>
    </div>


  </div>

</template>

<script>

import CitiesDropdown from "@/components/ATM/CitiesDropdown.vue";

export default {
  name: "ATMsView",
  components: {CitiesDropdown}
}
</script>

