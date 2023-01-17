<template>

  <div>
    {{carMake}} + {{carModel}}
    <br>
    <div class="row justify-content-center">
      <div class="col col-1">
        <input v-model="carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="AutoMark">
      </div>
      <div class="col col-1">
        <input v-model="carModel" type="text" class="form-control" placeholder="Auto mudel" aria-label="AutoMudel">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CarsView',
  data: function () {
    return {
      carMake: 'Audi',
      carModel: 'A7'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>