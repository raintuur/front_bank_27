<template>
  <div>
    <NewMemeHeader :company-name="companyName"/>
    <!--  ROW 1  -->
    <NewMemeInput :meme="meme"/>
    <!--    ROW 2  -->
    <div>
      <!--  COLUMN 1    -->
      <div class="col-1">
        <button v-on:click="addMeme" type="button" class="btn btn-outline-success">Lisa meem :)</button>
      </div>
    </div>

  </div>

</template>


<script>
import NewMemeHeader from "@/components/NewMemeHeader.vue";
import NewMemeInput from "@/views/NewMemeInput.vue";

export default {
  name: 'MemesView',
  components: (NewMemeHeader),
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