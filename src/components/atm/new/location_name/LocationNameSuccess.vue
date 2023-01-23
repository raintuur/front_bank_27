<template>
  <div class="input-group mb-3">
    <span class="input-group-text input-filled">Asukoht</span>
    <input v-model="locationName" type="text" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'LocationNameSuccess',
  props: {
    locationName: {}
  }
}
</script>