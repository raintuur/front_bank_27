<template>
  <div>
    <NewMemeHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <NewMemeInput :meme="meme"/>
    <br>
    <!--    ROW 2  -->
    <div class="justify-content-center">
      <div class="col col-12">
        <button v-on:click="addMeme" type="button" class="btn btn-outline-success">Lisa meem :)</button>
      </div>
    </div>
    <br>
    <div class=justify-content-center>
      <div>
        <img src="../assets/FB_IMG_1647564529352.jpg" height="640" width="640"/>
      </div>
    </div>
    <br>
    <MemeTable :memes="memes"/>
  </div>

</template>


<script>
import NewMemeHeader from "@/components/NewMemeHeader.vue";
import NewMemeInput from "@/views/NewMemeInput.vue";
import MemeTable from "@/views/MemeTable.vue";

export default {
  name: 'MemesView',
  components: {MemeTable, NewMemeHeader,NewMemeInput},
  data: function () {
    return {
      meme: {
        memeId: 0,
        memeAnimal: '',
        memeSource: '',
      },
      memes: [
        {
          memeId: 1,
          memeAnimal: 'opossum',
          memeSource: 'FB',
        },
        {
          memeId: 2,
          memeAnimal: 'kass',
          memeSource: 'insta',
        },
        {
          memeId: 3,
          memeAnimal: 'pesukaru',
          memeSource: 'tumblr',
        },
      ],
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