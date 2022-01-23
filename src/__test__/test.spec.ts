import { mount } from '@vue/test-utils'
import Test from '@/components/Test'

describe('app', () => {
  it('app should render correctly', async () => {
    const wrapper = mount(Test)
    expect(wrapper.html()).toContain('Unit Test Page')
    expect(wrapper.html()).toContain('count is: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('count is: 1')
  })
})
