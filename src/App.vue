
<template>
  <final-page :components="testData.components" :page="testData.page"></final-page>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent } from 'vue'
import LText from './components/LText/LText.vue'
import LImage from './components/LImage/LImage.vue'
import LShape from './components/LShape/LShape.vue'
import FinalPage from './components/FinalPage/FinalPage.vue'
export default defineComponent({
  name: 'App',
  components: {
    LText,
    LImage,
    LShape,
    FinalPage
  },
  setup () {
    const testData = {
      page: { props: { backgroundImage: 'url("https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f6ea094dc5a797fb46c1db5.jpg")'}},
      // 页面上面一个个组件的属性
      components: [
        {id: '123', name: 'l-text', props: { text: 'hello', top: '0', left: '20px'}},
        {id: '234', name: 'l-image', props: { imageSrc: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f6338e666336111f73d220c.png', top: '30px', left: '20px'}},
        {id: '235', name: 'l-shape', props: { backgroundColor: 'red', top: '50px', left: '20px', width: '100px', height: '100px'}},
        // 这是一个链接
        {id: '345', name: 'l-text', props: { backgroundColor: "#1890ff", color: "#ffffff", text: "按钮内容",  width: "100px", actionType: "to", url: "http://www.baidu.com", top: '200px', left: '150px',
        }}
      ]
    }
    return {
      testData
    }
  }
})
</script>

<style>

</style>