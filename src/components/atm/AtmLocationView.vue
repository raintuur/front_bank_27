<template>
  <div>

  <div class="row justify-content-center">
<!--cloumn1-->
    <div class="col-2">
      <CitiesDropdown/>
    </div>
<!--column2-->
    <div class="col-2">
      <AtmLocationNameInput :location-name="locationName"/>

      <NumberOfAtmsInput :number-of-atms="numberOfAtms"/>
      <TransactionTypeCheckBox/>
    </div>

<!--    column 3 -->
    <div class="col-2">

    </div>
  </div>



  </div>
</template>

<script>
import TransactionTypeCheckBox from "@/views/TransactionTypeCheckBox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationNameInput from "@/components/atm/AtmLocationNameInput.vue";
import atmLocationNameInput from "@/components/atm/AtmLocationNameInput.vue";
import NumberOfAtmsInput from "@/components/atm/NumberOfAtmsInput.vue";

export default {
  name: "AtmLocationView",
  computed: {
    atmLocationNameInput() {
      return atmLocationNameInput
    }
  },
  components: {NumberOfAtmsInput, AtmLocationNameInput, CitiesDropdown, TransactionTypeCheckBox},
  data: function () {
    return {
      locationName: '',
      numberOfAtms: ''
    }
  },
  methods: {

  }
}
</script>
