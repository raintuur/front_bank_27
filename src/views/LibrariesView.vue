<template>
  <div>
    <div class="row">

      <div class="col-2">
        <LibraryCityButtons/>

      </div>

    </div>

  </div>

</template>

<script>
import LibraryCityButtons from "@/components/Library/LibraryCityButtons.vue";

export default {
  name: "LibrariesView",
  components: {LibraryCityButtons},
}
</script>
