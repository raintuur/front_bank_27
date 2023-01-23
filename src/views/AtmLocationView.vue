<template>
  <div>
    <div class="row justify-content-center">


      <!--  COLUMN1  -->
      <div class="col-2 align">
        <CitiesDropdown/>
      </div>

      <!--  COLUMN 2  -->

      <div class="col-2">
        <AtmLocationNameInput :location-name="locationName"/>
        <NumberOfAtmsInput :number-of-atms="numberOfAtms"/>
        <div class="col-2 checkboxLabel">
          <TransactionTypeCheckBox/>
        </div>
      </div>

      <!--  COLUMN 3  -->


    </div>
  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/components/atm/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationNameInput from "@/components/atm/AtmLocationNameInput.vue";
import NumberOfAtmsInput from "@/views/NumberOfAtmsInput.vue";

export default {
  name: "AtmLocationView",
  components: {NumberOfAtmsInput, AtmLocationNameInput, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: 0
    }
  },
  methods: {

  }

}
</script>

<style>
.checkboxLabel{
  text-align: justify;
}
</style>

