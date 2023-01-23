<template>
  <div>
    <div class="row">
      <div>
        <LibraryCitiesView/>
      </div>
      <div class="col-2">
        <table class="table table-dark table-hover">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>



  </div>
</template>

<script>
import LibraryCitiesView from "@/components/library/LibraryCities.vue";

export default {
  name: "LibrariesView",
  components: {LibraryCitiesView},
  data: function () {

  },


}
</script>

