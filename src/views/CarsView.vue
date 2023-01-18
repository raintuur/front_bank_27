<template>
  <!--siia käib lehekülje struktuur HTML'na-->
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--  row 1-->
    <NewCarInput :car="car"
                 @clickAddCarEvent="addCar"
                 @pictureInputSuccess="setCarImage"
    />

    <!--  row 1-->
    <CarsTable :cars="cars"/>
    <img src="car.carImage" class="img-thumbnail">
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
        carModel: '',
        carImage: ''
      },

      cars: [
        {
          carId: '1',
          carMake: 'Tesla',
          carModel: 'CyberTruck',
          carImage: ''
        },
        {
          carId: '2',
          carMake: 'BMW',
          carModel: 'X6',
          carImage: ''
        },
        {
          carId: '3',
          carMake: 'Audi',
          carModel: 'A4',
          carImage: ''
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
    },
    setCarImage: function (carImage) {
      this.car.carImage = carImage
    }
  }
}
</script>