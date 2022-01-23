/*
 * @Description: store index
 * @Autor: xjj
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

export function setupStore(app: App<Element>) {
  const pinia = createPinia()
  app.use(pinia)
}
