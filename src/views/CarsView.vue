<template>
  <div>
    <!-- ROW 1-->
    <div class="row justify-content-center">

      <!--   COLUMN 1   -->
      <div class="col col-2">
        <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark">
      </div>

      <!--   COLUMN 2   -->
      <div class="col col-2">
        <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel">
      </div>

      <!--   COLUMN 3   -->
      <div class="col-3">
        <button v-on:click="addCar" type="button" class="btn btn-outline-success">Lisa auto</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CarsView',
  data: function () {
    return {
      car: {
        carMake: '',
        carModel: '',
      },
      cars: []

    }
  },
  methods: {
    addCar: function () {
      let carMake = "";
      let carModel = "";
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati systeemi")
    }
  }
}
</script>

