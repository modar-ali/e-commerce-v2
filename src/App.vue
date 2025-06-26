<template>
  <component :is="layout">
    <!-- inside both layouts, this renders the page -->
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseLayout from './components/BaseLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const route = useRoute()
const layout = computed(() =>
  route.meta.layout === 'none' ? EmptyLayout : BaseLayout
)
</script>

<style scoped></style>
