<template>
  <ProductsCollection
    :title="categoryProductsStore.category?.name as string"
    :products="categoryProductsStore.products"
    :c-page="categoryProductsStore.currentPage"
    :l-page="categoryProductsStore.lastPage"
    :fetch-products="categoryProductsStore.fetchCategoryProducts"
  />
</template>

<script setup lang="ts">
import { useCategoryProductsStore } from '@/features/categories/store/categoryProductsStore'
import ProductsCollection from '@/features/products/components/ProductsCollection.vue'

const categoryProductsStore = useCategoryProductsStore()
</script>

<style scoped></style>
