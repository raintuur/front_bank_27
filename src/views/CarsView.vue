<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--  ROW 1 -->
    <NewCarInput :car="car" @clickAddCarEvent="addCar" @pictureInputSuccess="setCarImage"
    />

    <br>

    <!--  ROW 2 -->
    <CarsTable :cars="cars"/>

    <img :src="car.carImage" class="img-thumbnail">

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
        carModel: '',
        carImage: ''
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
          carModel: 'CyberTruck'
        }
      ],
      companyName: "Kurvis Kraavis"
    }
  },

  methods: {
    addCar: function () {
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi")
      let carAsString = JSON.stringify(this.car)
      this.cars.push(JSON.parse(carAsString))
    },
    setCarImage: function (carImage) {
      this.car.carImage = carImage
    }
  }
}
</script>

