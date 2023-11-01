/* eslint-disable prettier/prettier */
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, it, expect, vi } from 'vitest'
import useUserStore from '@/stores/user'

vi.mock('@/includes/firebase', () => ({
  auth: { signInWithEmailAndPassword: () => Promise.resolve() },
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('authenticates user', async () => {
    const store = useUserStore()

    expect(store.userLoggedIn).not.toBe(true)
    await store.authenticate({})
    expect(store.userLoggedIn).toBe(true)
  })
})
