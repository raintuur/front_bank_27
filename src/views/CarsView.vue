<template>
  <div>
    <NewCarHeader :company-name="companyName"/>
    <!-- ROW 1 -->
    <NewCarInput :car="car"/>

  </div>
</template>


<script>
import NewCarHeader from "@/components/NewCarHeader.vue";
import NewCarInput from "@/views/NewCarInput.vue";

export default {
  name: 'CarsView',
  components: {NewCarHeader},
  data: function () {
    return {
      car: {
        carMake: '',
        carModel: '',
      },

      cars: [],
      companyName: 'Kurvis Kraavis!'
    }
  },

  methods: {
    addCar: function (carMake) {
      alert("Auto " + this.car.carMake + " " + this.car.carModel + " lisati süsteemi.")
    }

  }
}
</script>

<style scoped>

</style>