import { shallowMount } from '@vue/test-utils'
import LText from '../../src/components/LText'
import { componentsDefaultProps } from '../../src/defaultProps'
describe('LText.vue', () => {
  const { location } = window
  beforeEach((): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      delete window.location;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.location = {
          href: '',
      }
  })
  afterEach((): void => {
      window.location = location;
  })
  it('default LText render', () => {
    const msg = 'test'
    const props = {
      ...componentsDefaultProps['l-text'],
      text: msg
    }
    const wrapper = shallowMount(LText, { props })
    const style = wrapper.attributes().style
    // should have the right text
    expect(wrapper.text()).toMatch(msg)
    // should be p tag
    expect(wrapper.element.tagName).toBe('P')
    // should have one css attr
    expect(style.includes('font-size')).toBeTruthy()
    // should not have prop has been filtered
    expect(style.includes('actionType')).toBeFalsy()
  })
  it('LText with actionType and URL should trigger location href change', () => {
    const props = {
      ...componentsDefaultProps['l-text'],
      actionType: 'to',
      url: 'http://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    // should be h2
    expect(wrapper.element.tagName).toBe('H2')
    // trigger the element
    wrapper.trigger('click')
    expect(window.location.href).toBe(props.url)
  })
  it('LText with isEditing should not trigger location change', () => {
    const props = {
      ...componentsDefaultProps['l-text'],
      actionType: 'to',
      url: 'http://dummy.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
    // trigger the element
    wrapper.trigger('click')
    expect(window.location.href).not.toBe(props.url)
  })
})
