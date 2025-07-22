<template>
  <ProductsCollection
    :title="$route.params.product as string"
    :products="searchStore.products"
    :c-page="searchStore.currentPage"
    :l-page="searchStore.lastPage"
    :fetch-products="searchStore.fetchSearchedProducts"
  />
</template>

<script setup lang="ts">
import ProductsCollection from '@/features/products/components/ProductsCollection.vue'
import { useSearchStore } from '@/features/products/store/searchStore'

const searchStore = useSearchStore()
</script>

<style scoped></style>
