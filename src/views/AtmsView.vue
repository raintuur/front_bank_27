<template>
  <div>
    <div class="row justify-content-center">

    <div class="col-2">
      <CitiesDropdown/>
    </div>





    <div class="col-5">
      <AtmLocationsTable/>
    </div>

  </div>
  </div>
</template>



<script>
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";
import AtmLocationsTable from "@/views/AtmLocationsTable.vue";

export default {
  name: "AtmsView",
  components: {AtmLocationsTable, CitiesDropdown},
  data: function () {
    return{
      atmLocations: [
        [
          {
             locationId : 0,
             locationName :'',
             cityName :   ,
             transactionTypes : [
              {
                 typeName :   
              },
              {
                 typeName :   
              },
              {
                 typeName :   
              }
            ]
          },
          {
             locationId : 2,
             locationName :   ,
             cityName :   ,
             transactionTypes : [
              {
                 typeName :   
              },
              {
                 typeName :
              }
            ]
          },
          {
             locationId : 3,
             locationName :  ,
             cityName : ,
             transactionTypes : [
              {
                 typeName :
              },
              {
                 typeName :   
              }
            ]
          }
        ]
          
      ]
    }
  },

  methods: {
    getAllAtmLocations: function () {
      this.$http.get(url: "all/atm/locations")
          .then(response =>) {
        // soovime andmeid kusagile muutujasse panna
      }
        this.atmLocations = response.data

        console.log(response.data)
      })
      .catch(error =>) {
      console.log(error)
    })
  },
}
</script>