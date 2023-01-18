<template>
  <!--siia käib lehekülje struktuur HTML'na-->
  <div>
    <NewCarHeader :company-name="companyName" />
    <!--  row 1-->
    <NewCarInput :car="car"/>

  </div>

</template>

<script>

import NewCarHeader from "@/components/Car/NewCarHeader.vue";
import NewCarInput from "@/components/Car/NewCarInput.vue";

export default {
  name: 'CarsView',
  components: {NewCarInput, NewCarHeader},


  data: function () {
    return {

      car: {
        carMake: '',
        carModel: ''
      },

      cars: [],
      companyName: 'Kurvis Kalluta'
    }
  },

  methods: {
    addCar: function () {
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisatud andmebaasi")
    }
  }
}
</script>