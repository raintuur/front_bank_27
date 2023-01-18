<template>
  <!--siia käib lehekülje struktuur HTML'na-->
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--  row 1-->
    <NewCarInput :car="car" @clickAddCarEvent="addCar" />

    <!--  row 1-->
    <CarsTable :cars="cars"/>

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
        carId: '',
        carMake: '',
        carModel: ''
      },

      cars: [
        {
          carId: '1',
          carMake: 'Tesla',
          carModel: 'CyberTruck'
        },
        {
          carId: '2',
          carMake: 'BMW',
          carModel: 'X6'
        },
        {
          carId: '3',
          carMake: 'Audi',
          carModel: 'A4'
        }
      ],
      companyName: 'Kurvis Kalluta'
    }
  },

  methods: {
    addCar: function () {
      let carAsString = JSON.stringify(this.car)
      let copyOfCar = JSON.parse(carAsString)
      this.cars.push(copyOfCar)
    }
  }
}
</script>