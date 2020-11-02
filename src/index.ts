import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'
import FinalPage from './components/FinalPage'
const components = [ 
  LText,
  LImage,
  LShape,
  FinalPage
]

const install = (app: any) => { 
  components.map(component => {
    app.use(component)
  })
}

export { 
  install,
  LText,
  LImage,
  LShape,
  FinalPage
}

export default {
  install
}