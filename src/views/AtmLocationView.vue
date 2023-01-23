<template>
  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

      <div class="col-2">
        <CitiesDropdown/>
      </div>

      <!--  COLUMN 2  -->
      <div class="col-2">

        <div class="input-group mb-3">
          <span class="input-group-text">Asukoht</span>
          <input v-model="locationName" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Automaatide arv</span>
          <input v-model="numberOfAtms" type="number" min="10" class="form-control">
        </div>


        <TransactionTypeCheckBox/>


      </div>

      <!--  COLUMN 3  -->
      <div class="col-2">


      </div>
    </div>


  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/new/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtms from "@/components/atm/new/number_of/NumberOfAtms.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: "AtmLocationView",
  components: {AlertDanger, NumberOfAtms, LocationName, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: 0,

    }
  },
  methods: {

    someMethodName: function () {

      this.$http.get("/some/path")
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  }
}
</script>
