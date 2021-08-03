<template>
  <header>
    <Navbar />
  </header>
  <main>
    <!-- <router-view /> -->
    <NasaPage />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import NasaPage from './pages/NasaPage.vue'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { NasaPage }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
