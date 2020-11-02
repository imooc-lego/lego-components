<template>
  <l-text v-bind="props"></l-text>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LText from './components/LText/LText.vue'
export default defineComponent({
  name: 'App',
  components: {
    LText
  },
  setup () {
    return {
      props: { text: 'hello', top: '0', left: '20px'}
    }
  }
})
</script>

<style>

</style>