<template>
  <ProductsCollection
    title="Offers"
    :products="offersStore.products"
    :cPage="offersStore.currentPage"
    :lPage="offersStore.lastPage"
    :fetchProducts="offersStore.fetchOffers"
  />
</template>

<script setup lang="ts">
import ProductsCollection from '@/features/products/components/ProductsCollection.vue'
import { useOffersStore } from '@/features/products/store/offersStore'

const offersStore = useOffersStore()
</script>

<style scoped></style>
