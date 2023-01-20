<template>
  <div>
    <div class="col col-2 dropdown2">
      <CitiesDropdown/>
    </div>
    <div>
      <table>
        <thead>
        <tr>
          <td>Linn</td>
          <td>Asukoht</td>
          <td>Teenused</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CitiesDropdown from "@/components/atm/CitiesDropdown.vue";

export default {
  name: "AtmsView",
  components: {CitiesDropdown}
}
</script>

<style scoped>

</style>