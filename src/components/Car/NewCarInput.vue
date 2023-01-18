<template>
  <div class="row justify-content-center">
    <!--      COL 1-->
    <div class="col col-3">
      <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark">
    </div>
    <!--      COL 2-->
    <div class="col col-3">
      <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel">
    </div>
    <!--      COL 3-->
    <div class="col-3">
      <button v-on:click="addCar" type="button" class="btn btn-outline-success">Lisa auto</button>
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