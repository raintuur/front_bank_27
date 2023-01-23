<template>
<div>

  <div v-if="numberOfAtms == 0">
    <div class="input-group mb-3">
      <span class="input-group-text">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>
  <div v-else>
    <div class="input-group mb-3">
      <span class="input-group-text input-filled">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">

    </div>

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