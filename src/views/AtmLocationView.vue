<template>
  <div>

    <div class="row justify-content-center">

      <!-- COL 1   -->
      <div class="col-2">
        <CitiesDropdown/>
      </div>


      <div class="col-3">
        <AtmLocationNameInput :location-name="locationName"/>
        <numberOfAtmsInput :number-of-atms="numberOfAtms"/>
        <div>
          <TransactionTypeCheckbox/>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import TransactionTypeCheckbox from "@/components/atm/TransactionTypeCheckbox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationNameInput from "@/components/atm/AtmLocationNameInput.vue";
import NumberOfAtmsInput from "@/views/NumberOfAtmsInput.vue";

export default {
  name: "AtmLocationView",
  components: {NumberOfAtmsInput, AtmLocationNameInput, CitiesDropdown, TransactionTypeCheckbox},

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

