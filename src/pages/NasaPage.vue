<template>
  <div class="components container-fluid">
    <div class="row">
      <div col="col-12">
        <img
          class="img-fluid"
          src="../assets/img/cw-logo.png"
          alt="Nasa Picture
        of the day"
        />
        this is the home page
      </div>
      <div class="col-md-4">
        <SearchPicture />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
// import { SearchPicture } from '../components/SearchPicture.vue'

export default {
  name: 'NasaPage',
  setup() {
    const state = reactive({})
    return { state }
  }
  //  components: { SearchPicture }
}
</script>
