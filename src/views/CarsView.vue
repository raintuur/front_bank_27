<template>

  <div>

    <NewCarHeader :company-name="companyName"/>

    <!-- ROW 1 -->
    <NewCarInput :car="car"/>

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
import NewCarHeader from "@/components/NewCarHeader.vue";
import NewCarInput from "@/components/Car/NewCarInput.vue";

export default {
  name: "CarsView",
  components: {NewCarInput, NewCarHeader},
  data: function () {
    return {

      car: {
        carMake: '',
        carModel: '',
      },
      cars: [],
      companyName: 'Kurvis Kraavis'
    }
  },

  methods: {
    addCar: function (carMake, carModel) {


      alert("Auto " + this.car.carMake + "" + this.car.carModel + " lisati süsteemi")
    }
  }
}
</script>