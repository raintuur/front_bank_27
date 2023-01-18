<template>

  <div>
    <!--  ROW 1  -->
    <NewCarHeader  :company-name="companyName"/>
    <AddNewCarInput :car="car"/>

    <br>

  </div>

</template>

<script>
import NewCarHeader from "@/components/NewCarHeader.vue";
import AddNewCarInput from "@/components/AddNewCarInput.vue";

export default {
  name: 'CarsView',
  components: {AddNewCarInput, NewCarHeader},
  data: function () {
    return {

      car: {
        carMake: '',
        carModel: ''
      },
      cars: [],
      companyName: 'AAA'
    }
  },

  methods: {
    addCar: function () {
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi")
    }
  }
}
</script>

