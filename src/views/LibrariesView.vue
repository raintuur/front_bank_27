<template>
  <div class="row">
  <CitiesLibrary/>
  </div>
</template>

<script>
import CitiesLibrary from "@/components/libraries/CitiesLibrary.vue";

export default {
  name: "LibrariesView",
  components: {CitiesLibrary}
}
</script>