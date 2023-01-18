<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--  ROW 1 -->
    <NewCarInput :car="car" @clickAddCarEvent="addCar"/>

    <br>

    <!--  ROW 2 -->
    <!--  AUTOD -->
    <CarsTable :cars="cars"/>

  </div>
</template>

<script>
import NewCarHeader from "@/components/car/NewCarHeader.vue";
import NewCarInput from "@/components/car/NewCarInput.vue";
import CarsTable from "@/components/car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {CarsTable, NewCarInput, NewCarHeader},
  data: function () {
    return {

      car: {
        carId: 0,
        carMake: '',
        carModel: ''
      },

      cars: [
        {
          carId: 1,
          carMake: 'Audi',
          carModel: 'R8'
        },
        {
          carId: 2,
          carMake: 'BMW',
          carModel: 'X5'
        },
        {
          carId: 3,
          carMake: 'Tesla',
          carModel: 'Cybertruck'
        }
      ],
      companyName: "Kurvis Kraavis"
    }
  },
  methods: {
    addCar: function () {
      alert("Auto " + this.car.carMake + " " + this.car.carModel +  " lisati süsteemi.")
      let carAsString = JSON.stringify(this.car)
      let copyOfCar = JSON.parse(carAsString)
      this.cars.push(copyOfCar)
    }
  }
}
</script>
