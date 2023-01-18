<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--    ROW 1-->
    <NewCarInput :car="car" @clickAddCarEvent="addCarToBack" />

    <br>

    <!--    ROW 2-->
    <!--    Autod-->
    <carsTable :cars="cars"/>

  </div>

</template>


<script>
import NewCarHeader from "@/components/Car/NewCarHeader.vue";
import NewCarInput from "@/components/Car/NewCarInput.vue";
import CarsTable from "@/components/Car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {CarsTable, NewCarInput, NewCarHeader},
  data: function () {
    return {
      car: {
        carID: 0,
        carMake: '',
        carModel: ''
      },
      cars: [
        {
          carID: 1,
          carMake: 'Toyota',
          carModel: 'Supra'
        },
        {
          carID: 2,
          carMake: 'Mazda',
          carModel: 'RX-7'
        },
        {
          carID: 3,
          carMake: 'BMW',
          carModel: 'i8'
        }
      ],
      companyName: 'BestEst Cars OÜ'
    }
  },
  methods: {
    addCarToBack: function () {
      // AINULT <script> osas .this variable'd
      // let carMakeInFunct = this.car.carMake;
      // let carModelInFunct = this.car.carModel;
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi")
      let carAsString = JSON.stringify(this.car)
      let copyOfCar = JSON.parse(carAsString)
      this.cars.push(copyOfCar)
    }
  }
}
</script>
