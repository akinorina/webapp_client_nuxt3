<template>
  <header>
    <h1>index</h1>
  </header>

  <article>
    INDEX page.
  </article>

  <footer>
    <ul>
      <li><NuxtLink to="/samples/">samples/</NuxtLink></li>
      <li><NuxtLink to="/samples/sample001">samples/sample001</NuxtLink></li>
      <li><NuxtLink to="/samples/sample002">samples/sample002</NuxtLink></li>
      <li><NuxtLink to="/samples/sample003">samples/sample003</NuxtLink></li>
    </ul>
  </footer>
</template>

<script setup>
definePageMeta({ layout: "normal" });
</script>
