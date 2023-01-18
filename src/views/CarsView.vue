<template>
  <div>
<NewCarHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <NewCarInput :car="car"/>
<br>
<!--     ROW 1 -->
    <CarsTable :cars="cars"/>
  </div>

 </template>


<script>
import NewCarHeader from "@/components/NewCarHeader.vue";
import NewCarInput from "@/components/NewCarInput.vue";
import CarsTable from "@/components/car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {CarsTable, NewCarInput, NewCarHeader},
  data: function () {
    return {
      car: {
        carId: 1,
      carMake: '',
      carModel: '',
    },

      cars: [
        {
          carId: 2,
          carMake: 'Audi',
          carModel: 'R8'
        },
        {
          carMake: 'BMW',
          carModel: 'X5'
        }
      ],
      companyName: "Kurvis kraavis"
    }
  },
  methods: {
    addCar: function () {
      let carMake = "gtrgex";
      let carModel = "ygergege";

      alert("Auto" + this.car.carMake + " " + this.car.carModel + "lisati susteemi")
    }
  }
}
</script>
