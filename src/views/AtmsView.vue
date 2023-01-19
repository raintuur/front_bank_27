<template>
  <div>
    <div class="col-3">
      <CitiesDropDown/>
    </div>
  </div>
</template>

<script>
import CitiesDropDown from "@/components/atm/CitiesDropDown.vue";

export default {
  name: "AtmsView",
  components: {CitiesDropDown}
}

</script>

