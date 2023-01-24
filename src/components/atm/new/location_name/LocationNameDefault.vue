<template>
  <div class="input-group mb-3">
    <span class="input-group-text">Asukoht</span>
    <input :value="locationName" @input="$emit('input', $event)" type="text" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'LocationNameDefault',
  props: {
    locationName: String
  }
}
</script>