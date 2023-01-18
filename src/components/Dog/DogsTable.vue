<template>
  <div class="row justify-content-center">
    <div class="col col-8">
      <table class="table table-hover table-dark">
        <thead>
        <tr>
          <th>Koera nimi</th>
          <th>Koera isa</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="varjupaikTable in varjupaik">
          <td>{{varjupaikTable.krantsNimi}}</td>
          <td>{{varjupaikTable.krantsiPoegNimi}}</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script>
export default {
  name: 'DogsTable',
  props: {
    varjupaik: {}
  }
}
</script>