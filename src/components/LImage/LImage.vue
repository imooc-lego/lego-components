<template>
  <img
    :src="imageSrc" :style="styleProps"
    @click.prevent="handleClick" class="l-image-component"
    :draggable="false"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStylePick from '../../hooks/useStylePick'
import useComponentClick from '../../hooks/useComponentClick'
import { componentsDefaultProps, transformToComponentProps, isEditingProp } from '../../defaultProps'

// array that contains style props
export default defineComponent({
  name: 'l-image',
  props: transformToComponentProps(componentsDefaultProps['l-image'].props, isEditingProp),
  setup (props) {
    const styleProps = useStylePick(props)
    const handleClick = useComponentClick(props)

    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
}
</style>
