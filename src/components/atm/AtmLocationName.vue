<template>
  <div class="input-group mb-3">
    <span class="input-group-text" :class="{'input-success' :locationName !== ''}">Asukoht</span>
    <input v-model="locationName" :disabled="isView" type="text" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'AtmLocationName',
  props: {
    isView: Boolean
  },
  data: function () {
    return {
      locationName: ''
    }
  },
  methods: {
    emitLocationName: function () {
      this.$emit('emitLocationNameEvent', this.locationName)
    },
    setLocationName(locationName) {
      this.locationName = locationName
    }
  }
}
</script>