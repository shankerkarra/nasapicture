<template>
  <div class="row p-2 border bg-dark">
    <form @submit.prevent="getPictures">
      <input v-model="state.query" type="date" placeholder="enter a date" />
      <button>Search</button>
    </form>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";
import { reactive } from 'vue'
import { picturesService } from '../services/PicturesSearch'

export default {
  name: 'SearchPicture',
  date: Date(),
  setup() {
    const state = reactive({
      date: new Date().toISOString().substr(10, 0) // 05/09/2019
    })
    return {
      state,
      getPictures() {
        picturesService.getPicture(state.query)
      }
    }
  }
}
</script>
