<template>
  <nav>
    <ul class="nav-ul">
      <li><NuxtLink to="/">Top</NuxtLink></li>
      <li><NuxtLink to="/samples/">index</NuxtLink></li>
      <li><NuxtLink to="/samples/sample001">sample001</NuxtLink></li>
      <li><NuxtLink to="/samples/sample002">sample002</NuxtLink></li>
      <li><NuxtLink to="/samples/sample003">sample003</NuxtLink></li>
    </ul>
  </nav>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">

.nav-ul {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;

  margin: 0;
  border: 0px red solid;
  padding: 0;

  li {
    margin: 0;
    border-right: 1px #fcc solid;
    padding: 0 10px;
  }
  li:last-child {
    border: none;
  }
}
</style>
