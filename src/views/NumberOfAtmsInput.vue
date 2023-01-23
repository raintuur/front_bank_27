<template>
<div>

  <div v-if="Number(numberOfAtms) === 0">
    <div class="input-group mb-3">
      <span class="input-group-text">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>
  <div v-else-if="Number(numberOfAtms) < 0">
    <AlertError message="Negatiivne arv ei ole lubatud"/>
    <div class="input-group mb-3">
      <span class="input-group-text input-danger">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>

  </div>
  <div v-else>
    <div class="input-group mb-3">
      <span class="input-group-text input-success">Automaatide arv</span>
      <input v-model="numberOfAtms" type="number" class="form-control">
    </div>
  </div>

</div>
</template>
<script>
import AlertError from "@/views/AlertError.vue";

export default {
  name: 'NumberOfAtmsInput',
  components: {AlertError},
  props: {
    numberOfAtms: {}
  },
  data: function () {
    return {
      message: ''
    }
  }

}
</script>