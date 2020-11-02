<template>
  <div class="final-page">
    <div v-for="item in components" :key="item.id" :id="`component-${item.id}`">
      <component :is="item.name" v-bind="item.props"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'final-page',
  props: {
    components: {
      type: Array,
      required: true
    }
  }
})
</script>
