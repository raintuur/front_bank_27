<template>
  <div v-if="locationName == ''">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">Asukoht</span>
      <input v-model="locationName" type="text" class="form-control">
    </div>
  </div>
  <div v-else>
    <div class="input-group mb-3">
      <span class="input-group-text input-filled" id="basic-addon3">Asukoht</span>
      <input v-model="locationName" type="text" class="form-control">
    </div>
  </div>
</template>
<script>
export default {
  name: 'AtmLocationNameInput',
  props: {
    locationName: {}
  }
}
</script>