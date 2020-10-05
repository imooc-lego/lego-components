import { mapValues } from 'lodash-es'

// the common default props, all the components should have these props
export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}
export const textDefaultProps = {
  // basic props - font styles
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

export const imageDefaultProps = {
  imageSrc: '',
  ...commonDefaultProps
}
// this contains all default props for all the components
// useful for inserting new component into the store
export const componentsDefaultProps = {
  'l-text': {
    props: {
      text: '正文内容',
      ...textDefaultProps,
      fontSize: '14px'
    }
  },
  'l-image': {
    props: {
      ...imageDefaultProps
    }
  },
  'l-shape': {
    props: {
      backgroundColor: '',
      ...commonDefaultProps
    }
  }
}

export const transformToComponentProps = (props) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    }
  })
}
export default componentsDefaultProps
