import { defineStore } from 'pinia'

type TestStore = {
  test: number
  msg: string
}

const testState: TestStore = {
  test: 0,
  msg: ''
}

export const useTestStore = defineStore({
  id: 'test',
  state: () => testState,
  getters: {
    greater: (state) => state.test > 0
  },
  actions: {
    addTest() {
      this.test++
    }
  }
})
