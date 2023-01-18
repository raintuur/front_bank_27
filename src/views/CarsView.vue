<template>

  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <!--   COLUMN 1   -->
      <div class="col col-3">
        <input v-model="carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="AutoMark">
      </div>

      <!--   COLUMN 2   -->
      <div class="col col-3">
        <input v-model="carModel" type="text" class="form-control" placeholder="Auto mudel" aria-label="AutoMudel">
      </div>

      <div class="col col-3">
        <button type="button" class="btn btn-outline-success">Success</button>
      </div>
    </div>

    <br>

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