<template>
  <div v-if="Number(numberOfAtms) == ''">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>
  <div v-else-if="Number(numberOfAtms) <= 0">
    <div class="input-group mb-3">
      <span class="input-group-text input-filled-false" id="basic-addon3">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>
  <div v-else>
    <div class="input-group mb-3">
      <span class="input-group-text input-filled" id="basic-addon3">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>


</template>
<script>
export default {
  name: 'NumberOfAtmsInput',
  props: {
    numberOfAtms: {}
  }
}
</script>
