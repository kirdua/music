/* eslint-disable prettier/prettier */
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import About from '../../views/About.vue'

describe('About.vue', () => {
  it('renders innert text', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.text()).toContain('This is an about page')
  })
})
