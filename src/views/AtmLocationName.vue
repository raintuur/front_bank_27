<template>
  <div class="input-group mb-3">
    <span class="input-group-text" :class="{'input-success' :locationName !== ''}">Asukoht</span>
    <input v-model="locationName" type="text" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'AtmLocationName',
  data: function (){
    return {
      locationName: ''
    }
  },
  methods: {
    emitLocationName: function () {
      this.$emit('emitLocationNameEvent', this.locationName)
    }
  }
}
</script>