<template>
  <div>

    <div class="row justify-content-center">

    <div class="col-2">
      <CitiesDropdown/>
    </div>

<!--  TABEL    -->
    <div class="col-5">

      <table class="table table-hover table-dark">
        <thead>
        <tr>
          <th scope="col">Linn</th>
          <th scope="col">Asukoht</th>
          <th scope="col">Teenused</th>
        </tr>
        </thead>
        <tbody>
<!--    Allolevat elementi soovime JSON massiivi for loopiga genereerida    -->
        <tr>
          <td>?</td>
          <td>?</td>
          <td>@?</td>
        </tr>
        </tbody>

          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>

      <div






  </div>
</template>

<script>
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";

export default {
  name: "AtmsView",
  components: {CitiesDropdown}

}
</script>