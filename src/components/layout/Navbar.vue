<script setup>
const menus = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">CYVERSE</RouterLink>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="menu in menus" :key="menu.name">
          <RouterLink class="nav-link" :to="menu.path">
            {{ menu.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>