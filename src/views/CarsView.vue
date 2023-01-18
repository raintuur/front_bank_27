<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <NewCarInput :car="car" @clickAddCarEvent="addCar"/>
<br>
    <!--  ROW 2  -->
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
        carID: 0,
        carMake: '',
        carModel: '',
      },
      cars: [
        {
          carID: 1,
          carMake: 'Audi',
          carModel: 'R8',
        },
        {
          carID: 2,
          carMake: 'BMW',
          carModel: 'X5',
        },
        {
          carID: 3,
          carMake: 'Tesla',
          carModel: 'Cybertruck',
        }
      ],
      companyName: 'Kurvis Kraavis!!!!!!!!!!!'
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
