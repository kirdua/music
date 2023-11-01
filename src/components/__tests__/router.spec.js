/* eslint-disable prettier/prettier */
import { describe, it, expect } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import SongItem from '@/components/SongItem.vue'

describe('Router', () => {
  it('renders router link', () => {
    const song = {
      docID: 'abc',
    }

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: { 'router-link': RouterLinkStub },
      },
    })

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: 'song',
      params: { id: song.docID },
    })
  })
})
