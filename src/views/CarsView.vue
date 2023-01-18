<template>

  <div>

    <!-- ROW 1 -->
    <div class="row justify-content-center">

      <!--  COLUMN 1  -->
      <div class="col col-2">
        <input v-model="car.carMake" type="text" class="form-control" placeholder="Auto mark" aria-label="First name">
      </div>

      <!--  COLUMN 2  -->
      <div class="col col-2">
        <input v-model="car.carModel" type="text" class="form-control" placeholder="Auto mudel" aria-label="Last name">
      </div>

      <div class="col-3">
        <button v-on:click="addCar" type="button" class="btn btn-success">Lisa auto</button>
      </div>

    </div>

    <br><br><br>

    <i><h2>Autopidu</h2>

      <br>
      Daniel tahaks sinist Audit
      <br>
      Helar aga Bee Emm Veed
      <br>
      Rain hoopis Fordi naudiks
      <br>
      Kes küll meile ostab need?
    </i>

    <br><br><br>

    <img src="https://img.money.com/2016/08/gettyimages-503375934.jpg"
         alt="" width="500" height="350" style="border:1px solid black" class="my-img">

  </div>


</template>

<script>
export default {
  name: "CarsView",
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
    addCar: function (carMake, carModel) {


      alert("Auto " + this.car.carMake + "" + this.car.carModel + " lisati süsteemi")
    }
  }
}
</script>