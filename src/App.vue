<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div>
        <nav>
          <RouterLink to="/">First Page</RouterLink>
          <RouterLink to="/second-page">Second Page</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>

</style>
