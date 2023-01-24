<template>
  <div>

    <div class="row justify-content-center">

      <!-- COL 1   -->
      <div class="col-2">
        <CitiesDropdown @citiesDropdownOnChangeEvent="setCityId"/>
      </div>

      <!--col 2-->
      <div class="col-3">
        <LocationName @locationNameChangeEvent="setLocationName"/>
        <numberOfAtmsInput @numberOfAtmChangeEvent="setNumberOfAtms"/>
        <div>
          <TransactionTypeCheckbox ref="transactionTypesRef" @transactionTypesUpdateEvent="setTransactionTypes"  />
        </div>
        <div>
          <image-input @pictureInputSuccess="setPictureBase64Data"/>
        </div>


        <div>
          <button v-on:click="navigateToAtms" type="button" class="btn btn-danger justify-content-end">Tühista</button>
          <button v-on:click="addAtmLocation" type="button" class="btn btn-success justify-content-end">Lisa</button>
        </div>
      </div>

      <!--col 3-->
      <div class="col-3">
        <img :src=atmRequest.picture class="img-thumbnail" alt="...">
      </div>

    </div>

  </div>
</template>

<script>
import TransactionTypeCheckbox from "@/components/atm/new/TransactionTypeCheckbox.vue";
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import LocationName from "@/components/atm/new/location_name/LocationName.vue";
import NumberOfAtmsInput from "@/components/atm/new/numberOf/NumberOfAtmsInput.vue";
import ImageInput from "@/components/ImageInput.vue";
import atmsView from "@/views/AtmsView.vue";

export default {
  name: "AtmLocationView",
  components: {ImageInput, NumberOfAtmsInput, LocationName, CitiesDropdown, TransactionTypeCheckbox},

  data: function () {
    return {
      locationName: '',
      numberOfAtms: 0,

      atmRequest: {
        cityId: 0,
        locationName: '',
        numberOfAtms: 0,
        picture: '',
        transactionTypes: [
          {
            typeId: 0,
            typeName: '',
            isSelected: false
          }
        ]
      }

    }
  },

  methods: {
    setPictureBase64Data: function (pictureBase64Data) {
      this.atmRequest.picture = pictureBase64Data
    },

    addAtmLocation: function () {
      // todo: käivitame checkbox info sissetõmbamise child komponendis (TransactionTypeCheckbox
      this.$refs.transactionTypesRef.sendTransactionTypesToParent()

      this.$http.post("/atm/location", this.atmRequest
      ).then(response => {
        console.log('great success??')
      }).catch(error => {
        console.log(error)
      })
    },

    setCityId: function (cityId) {
      this.atmRequest.cityId = cityId
    },

    setLocationName: function (locationName) {
      this.atmRequest.locationName = locationName
    },

    setNumberOfAtms: function (numberOfAtms) {
      this.atmRequest.numberOfAtms = Number(numberOfAtms)
    },

    setTransactionTypes: function (transactionTypesEmit) {
      this.atmRequest.transactionTypes = transactionTypesEmit
    },

    navigateToAtms: function () {
      this.$router.push({name: 'atmsRoute'})
    }

  }
}
</script>

