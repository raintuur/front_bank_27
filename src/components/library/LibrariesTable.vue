<template>

  <!--  VAJA TEHA METHOD, MIS TÄIDAB DATA BLOCKI  -->
  <!--  VAJA POPULATEDA TABEL-->

  <div class="col col-7">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Linn</th>
        <th scope="col">Nimi</th>
        <th scope="col">Teenused</th>
      </tr>
      </thead>
      <tbody>
      <tr v->
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>

      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'LibrariesTable',
  data: function () {
    return {
      libraries: {
        cityName: '',
        libraryName: '',
        libraryId: '',
        services: [
          {
            serviceName: ''
          }
        ]
      }
    }
  },
  methods: {
    getLibraries: function () {

    }
  }
}
</script>
