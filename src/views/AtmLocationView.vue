<template>
  <div>

    <!--  ROW 1  -->
    <div class="row justify-content-center">

<!--    COL 1-->
    <div class="col-2">
      <CitiesDropdown/>
    </div>

<!--    COL 2-->
    <div class="col-2">
      <AtmLocationNameInput :location-name="locationName"/>
      <NumberOfAtmsInput :number-of-atms="numberOfAtms"/>
      </div>

<!--    COL 3-->
    <div class="col-2">
      <TransactionTypeCheckBox/>
    </div>
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
      numberOfAtms: 0,
    }
  },
  methods: {}
}
</script>
