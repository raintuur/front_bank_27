<template>

  <div v-if="locationName == ''">
    <div class="input-group mb-3">
      <span class="input-group-text">Asukoht</span>
      <input v-model="locationName" type="text" class="form-control">
    </div>
  </div>

  <div v-else>
    <div class="input-group mb-3">
      <span class="input-group-text input-filled">Asukoht</span>
      <input v-model="locationName" type="text" class="form-control">
    </div>
  </div>

</template>
<script>
import LocationNameDefault from "@/components/atm/new/location_name/LocationNameDefault.vue";
import LocationNameSuccess from "@/components/atm/new/location_name/LocationNameSuccess.vue";

export default {
  name: 'LocationName',
  components: {LocationNameSuccess, LocationNameDefault},
  props: {
    locationName: {}
  }
}
</script>