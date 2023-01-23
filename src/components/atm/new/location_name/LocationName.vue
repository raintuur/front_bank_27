<template>

  <div v-if="locationName == ''">
    <LocationNameDefault :location-name="locationName"/>
  </div>

  <div v-else>
    <LocationNameSuccess :location-name="locationName"/>
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