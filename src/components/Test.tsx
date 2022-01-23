import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return () => (
      <div class="test-container page-container">
        <div class="page-title">Unit Test Page1</div>
        <p>count is: {count.value}</p>
        <button onClick={increment}>increment</button>
      </div>
    )
  }
})
