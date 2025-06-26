<template>
  <header><NavBar /></header>
  <main class="dark:bg-gray-900"><slot /></main>
  <footer><Footer /></footer>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>

<style scoped></style>
