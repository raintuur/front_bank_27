<template>
  <div class="row justify-content-center">

    <!--    COLUMN 1  -->
    <div class="col col-3">
      <input v-model="car.carMake" class="form-control" placeholder="Auto mark">
    </div>

    <!--    COLUMN 2  -->
    <div class="col col-3">
      <input v-model="car.carModel" class="form-control" placeholder="Auto mudel">
    </div>

    <!--    COLUMN 3  -->
    <div class="col col-3">
      <input type="file" accept="image/png, image/jpeg">
    </div>

    <!--    COLUMN 4  -->
    <div class="col col-3">
      <button v-on:click="addCar" class="btn btn-outline-success">Lisa auto</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCarInput',
  props: {
    car: {}
  },
  methods: {
    addCar: function () {
      this.$emit('clickAddCarEvent')
    }
  }
}
</script>