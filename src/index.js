import LText from './components/LText'
import LImage from './components/LImage'
import FinalPage from './components/FinalPage'
const components = [ 
  LText,
  LImage,
  FinalPage
]

const install = function(app) { 
  components.map(component => {
    app.use(component)
  })
}

export { 
  install,
  LText,
  LImage,
  FinalPage
}

export default {
  install
}