<template>

  <div>

    <NewCarHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <AddNewCarInput :car="car" @clickAddCarEvent="addCar"
                    @pictureInputSuccess="setCarImage"/>
    <!--  Autod  -->
    <br>
    <CarsTable :cars="cars"/>
  </div>

</template>

<script>
import NewCarHeader from "@/components/car/NewCarHeader.vue";
import AddNewCarInput from "@/components/car/AddNewCarInput.vue";
import CarsTable from "@/components/car/CarsTable.vue";

export default {
  name: 'CarsView',
  components: {CarsTable, AddNewCarInput, NewCarHeader},
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
          carMake: 'Kia',
          carModel: 'ceed',
          carImage: ''
        },
        {
          carId: '2',
          carMake: 'Lexus',
          carModel: 'IS200',
          carImage: ''
        },
        {
          carId: '3',
          carMake: 'Volkswagen',
          carModel: 'Golf Variant',
          carImage: ''
        }
      ],
      companyName: 'AAA'
    }
  },

  methods: {
    addCar: function () {
      let newCarString = JSON.stringify(this.car)
      let parseNewCar = JSON.parse(newCarString)
      parseNewCar.carId = this.cars.length + 1
      this.cars.push(parseNewCar)
    },
    setCarImage: function (carImage) {
      this.car.carImage = carImage
    }
  }
}
</script>

