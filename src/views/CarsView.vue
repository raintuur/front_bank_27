<template>
  <div class="cars">
    <NewCarHeader :company-name="companyName"/>
    <NewCarInput :car="car"
                 @clickAddCarEvent="addCar"
                 @pictureInputSuccess="setCarImage"
    />
    <br>

    <CarsTable :cars="cars"/>
    <div class="col-3">
      <img :src="car.carImage" class="img-fluid"/>
    </div>
  </div>
</template>

<script>
import NewCarHeader from "@/components/car/NewCarHeader.vue";
import NewCarInput from "@/components/car/NewCarInput.vue";
import CarsTable from "@/components/car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {
    CarsTable,
    NewCarInput,
    NewCarHeader
  },
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
      companyName: 'Kurvis Kraavis'
    }
  },
  methods: {
    addCar: function() {
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