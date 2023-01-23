<template>
  <div class="input-group mb-3">
    <span class="input-group-text">Automaatide arv</span>
    <input v-model="numberOfAtms" type="number" class="form-control">
  </div>
</template>
<script>
export default {
  name: 'NumberOfAtmsDefault',
  props: {
    numberOfAtms: {}
  }
}
</script>