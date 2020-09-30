import { pick, without } from 'lodash-es'
import { computed } from 'vue'
import { textDefaultProps } from '../defaultProps'

export const defaultStyles = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
const useStylePick = (props, pickStyles = defaultStyles) => {
  return computed(() => pick(props, pickStyles))
}

export default useStylePick
