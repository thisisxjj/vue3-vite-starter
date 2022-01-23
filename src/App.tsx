import { defineComponent } from 'vue'
import { useTestStore } from '@/store/useTestStore'

export default defineComponent({
  name: 'App',
  setup() {
    const testStore = useTestStore()

    return () => (
      <>
        <button
          onClick={() => testStore.addTest()}
          title="App"
          name={testStore.msg}
        >
          Add
        </button>
        <div class="dd">{testStore.test}</div>
      </>
    )
  }
})
