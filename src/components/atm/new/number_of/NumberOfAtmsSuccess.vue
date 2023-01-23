<template>
  <div class="input-group mb-3">
    <span class="input-group-text input-filled">Automaatide arv</span>
    <input v-model="numberOfAtms" type="number" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'NumberOfAtmsSuccess',
  props: {
    numberOfAtms: {}
  }
}
</script>