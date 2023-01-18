<template>
  <div>
    <NewPlanetHeader :company-name="companyName"/>

    <img id="myimage"
         src="data:image/jpeg;base64,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" alt="image">
    <br><br>

    <NewPlanetInput :planet="planet" @clickAddPlanetEvent="addPlanet"/>

    <br><br>

    <div class="row justify-content-center">
      <div class="col col-3">
    <table class="table table-hover table-dark">
      <thead>
      <tr>
        <th scope="col">Nimi</th>
        <th scope="col">Number</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th v-for="planet. in planets"></th>
        <td>{{ planets.planetName }}</td>
        <td>{{ planets.planetNumber }}</td>

      </tr>
       </tbody>
      </table>
      </div>
     </div>
    </div>


</template>


<script>


import NewPlanetHeader from "@/components/NewPlanetHeader.vue";
import NewPlanetInput from "@/components/planet/NewPlanetInput.vue";

export default {
  name: "TaevakehadView",
  components: {NewPlanetInput, NewPlanetHeader},
  data: function () {
    return {

      planets: [
        {
          planetName: 'Merkuur',
          planetNumber: '1',
        },
        {
          planetName: 'Mars',
          planetNumber: '3',
        },
        {
          planetName: 'Jupiter',
          planetNumber: '5',
        },
      ],
      companyName: 'Blablablaneet',
      planet:
          {
            planetName: '',
            planetNumber: '',
          },
    }
  },

  methods: {
    addPlanet: function () {

      alert(this.planet.planetName + " ja " + this.planet.planetNumber + " on vastus")
      let planetAsString = JSON.stringify(this.planet)
      let copyOfPlanet = JSON.parse(carAsString)
      this.planets.push(copyOfPlanet)
    }


  }


}

</script>



