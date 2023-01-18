<template>
  <div>
<!--    <NewDogHeader company-name="Üksinda kodus"/>-->
    <NewDogHeader :company-name="companyName"/>
<!--    kui koolon on company name ees siis ta ei oota stringi vaid muutujat-->
    <!--  ROW 1 see div mille sees col div-id  -->
    <NewDogInput :koer="koer" @clickAddDogEvent="addDog" @pictureInputSuccess="setDogImage"/>
    <br>
    <!--    Varjupaik-->
    <DogsTable :varjupaik="varjupaik"/>

    <img :src="koer.dogImage" class="img-thumbnail">



    <br>
    <img src="https://i.pinimg.com/564x/ef/35/a6/ef35a6daa94bed948fd3d5466457d55e--so-funny-funny-stuff.jpg">
  </div>
</template>

<script>


import NewDogHeader from "@/components/Dog/NewDogHeader.vue";
import NewDogInput from "@/components/Dog/NewDogInput.vue";
import DogsTable from "@/components/Dog/DogsTable.vue";

export default {
  name: 'DogsView',
  components: {DogsTable, NewDogInput, NewDogHeader},
  data: function () {
    return {
      koer:
        {
          krantsId: '',
          krantsNimi: '',
          krantsiPoegNimi: '',
          dogImage: '',
        },
      varjupaik: [
        {
          krantsId: '1',
          krantsNimi: 'Leedi',
          krantsiPoegNimi: 'Lontu',
          dogImage: '',
        },
        {
          krantsId: '2',
          krantsNimi: 'Bella',
          krantsiPoegNimi: 'Muki',
          dogImage: '',
        },
        {
          krantsId: '3',
          krantsNimi: 'Leili',
          krantsiPoegNimi: 'Väints',
          dogImage: '',
        }
      ],
      companyName: 'Üksinda kodus'
    }
  },
  methods:{
    addDog: function () {
      alert("Koer " + this.koer.krantsNimi + ' '+ this.koer.krantsiPoegNimi +  " lisati süsteemi")
      let DogAsStrign = JSON.stringify(this.koer)
      let copyOfDog = JSON.parse(DogAsStrign)
      this.varjupaik.push(copyOfDog)
    },
    setDogImage: function (dogImage) {
    this.koer.dogImage = dogImage
    }
  }
}
</script>
