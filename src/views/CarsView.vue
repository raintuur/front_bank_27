<template>

  <div>

    <NewCarHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <AddNewCarInput :car="car"/>
    <br>
    <div class="row justify-content-center">
      <div class="col col-9">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Auto mark</th>
          <th>Auto mudel</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(car, index) in cars">
          <th>{{index + 1}}</th>
          <td>{{car.carMake}}</td>
          <td>{{car.carModel}}</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
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
      cars: [
        {
          carMake: 'Kia',
          carModel: 'ceed'
        },
        {
          carMake: 'Lexus',
          carModel: 'IS200'
        },
        {
          carMake: 'Volkswagen',
          carModel: 'Golf Variant'
        }
      ],
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

