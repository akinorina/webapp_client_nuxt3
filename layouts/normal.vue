<template>
  <nav>
    <ul class="nav-ul">
      <li><NuxtLink to="/">Top</NuxtLink></li>
      <li><NuxtLink to="/samples/">samples</NuxtLink></li>
    </ul>
  </nav>
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
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
}</style>
