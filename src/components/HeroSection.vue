<template>
  <div
    class="bg-white py-8 grid place-content-center xl:h-[calc(100vh_-_97.6px)] antialiased dark:bg-gray-900 md:py-16"
  >
    <div
      class="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0"
    >
      <div
        class="content-center justify-self-start md:col-span-7 md:text-start"
      >
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl"
        >
          Limited Time Offer!<br />Up to 50% OFF!
        </h1>
        <p
          class="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl"
        >
          Don't Wait - Limited Stock at Unbeatable Prices!
        </p>
        <button
          @click="$router.push({ name: 'Offers' })"
          class="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Shop Now
        </button>
      </div>
      <div class="hidden md:col-span-5 md:mt-0 md:flex">
        <img
          class="dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
          alt="shopping illustration"
        />
        <img
          class="hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
          alt="shopping illustration"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
