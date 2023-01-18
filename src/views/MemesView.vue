<template>
  <div>
    <NewMemeHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <NewMemeInput :meme="meme"/>
    <!--    ROW 2  -->
    <div>
      <!--  COLUMN 1    -->
      <div class=justify-content-center>
        <button v-on:click="addMeme" type="button" class="btn btn-outline-success translate-middle">Lisa meem :)</button>
      </div>
    </div>
    <div class=justify-content-center>
      <img src="../assets/FB_IMG_1647564529352.jpg" height="640" width="640"/>
    </div>
    <div>
      <table class="table table-success table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Loom meemis</th>
          <th scope="col">Meemi allikas</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>opossum</td>
          <td>FB</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>kass</td>
          <td>insta</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>koer</td>
          <td>tumblr</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>


<script>
import NewMemeHeader from "@/components/NewMemeHeader.vue";
import NewMemeInput from "@/views/NewMemeInput.vue";

export default {
  name: 'MemesView',
  components: {NewMemeHeader,NewMemeInput},
  data: function () {
    return {
      meme: {
        memeAnimal: '',
        memeSource: '',
      },
      companyName: 'Meemimutid'
    }
  },
  methods:
      {
        addMeme: function () {
          let memeAnimal = "tyhjus"
          let memeSource = "tyhjus"
          alert("lol! Meem loomaga " + this.meme.memeAnimal + " asukohast " + this.meme.memeSource + " lisati süsteemi xD")
        }
      }
}
</script>