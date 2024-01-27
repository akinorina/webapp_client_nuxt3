<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const store = useCounterStore();

const runtimeConfig = useRuntimeConfig()
console.debug('runtimeConfig', runtimeConfig)
console.debug('runtimeConfig.apiSecret', runtimeConfig.apiSecret)
console.debug('runtimeConfig.public.apiBase', runtimeConfig.public.apiBase)

const appConfig = useAppConfig()
console.debug('appConfig.foo', appConfig.foo)

definePageMeta({ layout: "normal" })
</script>

<template>
  <header>
    <h1>index</h1>
  </header>

  <article>
    <div>INDEX page.</div>

    <div class="store-tests">
      <h2>store-tests</h2>
      <table>
        <tr><th>name</th><td><input v-model="store.name" /></td></tr>
        <tr><th>count</th><td><input v-model="store.count" /></td></tr>
      </table>
      <div>
        <button @click="store.increment()">push me! increment it.</button>
      </div>
    </div>
  </article>

  <footer>
    <ul>
      <li><NuxtLink to="/samples/">samples/</NuxtLink></li>
      <li><NuxtLink to="/store-tests/">store-tests/</NuxtLink></li>
    </ul>
  </footer>
</template>

<style lang="scss">

.store-tests {
  margin: 10px;
  border: 5px #e0e0e0 dashed;
  padding: 10px;

  h2 {
    margin: 0;
    margin-bottom: 10px;
  }
}

</style>
