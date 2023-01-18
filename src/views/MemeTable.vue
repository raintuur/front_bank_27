<template>
  <div>
    <table class="table table-success table-striped">
      <thead>
      <tr>
        <th scope="col">Loom meemis</th>
        <th scope="col">Meemi allikas</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="meme in memes">
        <td>{{meme.memeAnimal}}</td>
        <td>{{meme.memeSource}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'MemeTable',
  props: {
    memes: {}
  }
}
</script>