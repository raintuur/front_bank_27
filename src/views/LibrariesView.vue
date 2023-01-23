<template>
  <div>

    <div class="row">

      <div class="col-3">

        <LibrariesLocationButton/>


      </div>

    </div>

  </div>
</template>

<script>
import LibrariesLocationButton from "@/components/library/LibrariesLocationButton.vue";

export default {
  name: "LibrariesView",
  components: {LibrariesLocationButton}
}
</script>
