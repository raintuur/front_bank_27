<template>
<div>

    <div class="input-group mb-3">
      <span class="input-group-text"
            :class="{'input-filled': (locationName !=='')}" >Asukoht</span>
      <input v-model="locationName" v-on:change="locationNameChangeEvent" type="text" class="form-control">
    </div>

</div>
</template>
<script>
import LocationNameDefault from "@/components/atm/new/location_name/LocationNameDefault.vue";
import LocationNameSuccess from "@/components/atm/new/location_name/LocationNameSuccess.vue";

export default {
  name: 'LocationName',
  components: {LocationNameSuccess, LocationNameDefault},
  data: function () {
    return {
      locationName: ''
    }
  },

  methods: {
    locationNameChangeEvent: function () {
      this.$emit('locationNameChangeEvent', this.locationName)
    }
  }

}
</script>