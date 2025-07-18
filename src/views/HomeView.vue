<template>
  <section class="container mx-auto px-4 py-8">
    <HeroSection />
    <!-- then maybe a grid of trindy products. -->
    <ProductsCollection
      title="Trendy Products"
      :products="trendyProductsStore.products"
      :cPage="trendyProductsStore.currentPage"
      :lPage="trendyProductsStore.lastPage"
      :fetchProducts="trendyProductsStore.fetchTrendyProducts"
    />
  </section>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProductsCollection from '@/features/products/components/ProductsCollection.vue'
import { useTrendyProductsStore } from '@/features/products/store/trendyProductsStore'

const trendyProductsStore = useTrendyProductsStore()
</script>

<style scoped></style>
