import { shallowMount } from '@vue/test-utils'
import LImage from '../../src/components/LImage'
import { componentsDefaultProps } from '../../src/defaultProps'
describe('LImage.vue', () => {
  it('default LImage render', () => {
    const srcPath = 'test.jpg'
    const props = {
      ...componentsDefaultProps['l-image'],
      imageSrc: srcPath
    }
    const wrapper = shallowMount(LImage, { props })
    const style = wrapper.attributes().style
    const src = wrapper.attributes().src
    // should match the path
    expect(src).toMatch(srcPath)
    // should be Img tag
    expect(wrapper.element.tagName).toBe('IMG')
    // should not have prop has been filtered
    expect(style.includes('imageSrc')).toBeFalsy()
  })
})
