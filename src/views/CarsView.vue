<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!-- ROW 1 -->
    <NewCarInput :car="car" @clickAddCarEvent="addCar"/>

    <br>

    <!-- ROW 2 -->
    <!--    Autode tabel   -->
    <CarsTable :cars="cars"/>
  </div>


</template>

<script>
import NewCarHeader from "@/components/NewCarHeader.vue";
import NewCarInput from "@/components/car/NewCarInput.vue";
import CarsTable from "@/components/car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {CarsTable, NewCarInput, NewCarHeader},

  data: function () {
    return {
      car: {
        carID: 0,
        carMake: '',
        carModel: '',
      },

      cars: [
        {
          carID: 3,
          carMake: 'Audi',
          carModel: 'R8',
        },
        {
          carID: 2,
          carMake: 'BMW',
          carModel: 'X5',
        },
        {
          carID:3,
          carMake: 'Tesla',
          carModel: 'CyberTruck',
        }
      ],
      companyName: 'Kurvis Kraavis'
    }
  },
  methods: {
    addCar: function () {
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi")
      let carAsString = JSON.stringify(this.car)
      let copyOfCar = JSON.parse(carAsString)

      this.cars.push(copyOfCar)
    //    this.cars.push(JSON.parse(JSON.stringify(this.car)))
    }
  }
}
</script>
