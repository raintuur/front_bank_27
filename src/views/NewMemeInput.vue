<template>
  <div class="row justify-content-center">

    <!--  COLUMN 1    -->
    <div class="col col-3">
      <input v-model="meme.memeAnimal" type="text" class="form-control" placeholder="Loom meemis">
    </div>

    <!--  COLUMN 2    -->
    <div class="col col-3">
      <input v-model="meme.memeSource" type="text" class="form-control" placeholder="Meemi allikas">
    </div>

    <!--  COLUMN 3    -->
    <div class="col col-3">
      <input type="file" name="Added Meme" id="addedMeme">
    </div>

  </div>
</template>
<script>
export default {
  name: 'NewMemeInput',
  props: {
    meme: {}
  }
}
</script>