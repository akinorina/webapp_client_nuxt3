<template>
  <div>
    <header>
      <h1>store-tests/index</h1>
    </header>

    <article>
      <table>
        <tr><th>name</th><td><input v-model="store.name" /></td></tr>
        <tr><th>count</th><td><input v-model="store.count" /></td></tr>
      </table>
      <div>
        <button @click="store.increment()">push me! increment it.</button>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

</script>
