import LImage from './LImage.vue'

LImage.install = function(app) {
  app.component(LImage.name, LImage)
}

export default LImage