<template>
  <nav class="bg-white dark:bg-gray-800 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-8 lg:basis-4/6">
          <div class="shrink-0">
            <a href="#" title="" class="">
              <img
                class="block w-auto h-8 dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                alt=""
              />
              <img
                class="hidden w-auto h-8 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                alt=""
              />
            </a>
          </div>

          <ul
            class="hidden lg:flex items-center justify-start basis-full gap-6 py-3 sm:justify-center"
          >
            <li>
              <RouterLink
                :to="{ name: 'Home' }"
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Home
              </RouterLink>
            </li>
            <li class="shrink-0">
              <RouterLink
                :to="{ name: 'About' }"
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                About
              </RouterLink>
            </li>
            <li class="shrink-0">
              <RouterLink
                :to="{ name: 'Contact' }"
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Contact
              </RouterLink>
            </li>
            <li class="grow">
              <div class="max-w-lg mx-auto">
                <div class="flex">
                  <button
                    id="dropdownNavbarLinkLg"
                    data-dropdown-toggle="dropdownNavbarLg"
                    class="shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  >
                    All Categories
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownNavbarLg"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Bedrooms</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >living rooms</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Kitchens</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Bathrooms</a
                        >
                      </li>
                    </ul>
                  </div>
                  <form class="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Search for Products..."
                      required
                    />
                    <button
                      type="submit"
                      class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span class="sr-only">Search</span>
                    </button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex items-center lg:space-x-2">
          <DarkModeSwitcher />
          <button
            v-if="authStore.isLoggedIn"
            id="myCartDropdownButton1"
            data-dropdown-toggle="myCartDropdown1"
            type="button"
            class="inline-flex items-center rounded-lg justify-center p-2 ml-1 sm:ml-3 mr-0 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
          >
            <span class="sr-only"> Cart </span>
            <svg
              class="w-5 h-5 lg:me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <span class="hidden sm:flex">My Cart</span>
            <svg
              class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>

          <div
            v-if="authStore.isLoggedIn"
            id="myCartDropdown1"
            class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
          >
            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple iPhone 15</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $599
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 1
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem1a"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem1a"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple iPad Air</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $499
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 1
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem2a"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem2a"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple Watch SE</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $598
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 2
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem3b"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem3b"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Sony Playstation 5</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $799
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 1
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem4b"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem4b"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple iMac 20"</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $8,997
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 3
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem5b"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem5b"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <a
              href="#"
              title=""
              class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              Proceed to Checkout
            </a>
          </div>

          <button
            v-if="authStore.isLoggedIn"
            id="userDropdownButton1"
            data-dropdown-toggle="userDropdown1"
            type="button"
            class="inline-flex items-center rounded-lg justify-center p-2 ml-1 sm:ml-3 mr-0 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
          >
            <svg
              class="w-5 h-5 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span class="hidden sm:flex">Account</span>
            <svg
              class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>
          <button
            v-else
            @click="$router.push({ name: 'Login' })"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-1 sm:ml-3 mr-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
            <svg
              class="hidden w-5 h-5 ms-2 sm:block text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
          </button>

          <div
            v-if="authStore.isLoggedIn"
            id="userDropdown1"
            class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
          >
            <ul
              class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white"
            >
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Favourites
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Delivery Addresses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Billing Data
                </a>
              </li>
            </ul>

            <div
              v-if="authStore.isLoggedIn"
              class="p-2 text-sm font-medium text-red-600"
            >
              <button
                @click="doLogout"
                class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Logout
                <svg
                  class="w-5 h-5 text-red-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <button
            type="button"
            data-collapse-toggle="ecommerce-navbar-menu-1"
            aria-controls="ecommerce-navbar-menu-1"
            aria-expanded="false"
            class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 ml-1 text-gray-900 dark:text-white"
          >
            <span class="sr-only"> Open Menu </span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="ecommerce-navbar-menu-1"
        class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
      >
        <ul class="text-gray-900 text-sm font-medium dark:text-white space-y-3">
          <li>
            <RouterLink
              :to="{ name: 'Home' }"
              class="hover:text-primary-700 dark:hover:text-primary-500"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'About' }"
              class="hover:text-primary-700 dark:hover:text-primary-500"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'Contact' }"
              class="hover:text-primary-700 dark:hover:text-primary-500"
              >Contact</RouterLink
            >
          </li>
          <li>
            <div class="max-w-lg">
              <div class="flex">
                <button
                  id="dropdownNavbarLinkSm"
                  data-dropdown-toggle="dropdownNavbarSm"
                  class="shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                >
                  All Categories
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbarSm"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Bedrooms</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >living rooms</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Kitchens</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Bathrooms</a
                      >
                    </li>
                  </ul>
                </div>
                <form class="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search for Products..."
                    required
                  />
                  <button
                    type="submit"
                    class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Teleport to="body"><Spinner v-if="loading" /></Teleport>
</template>

<script setup lang="ts">
import DarkModeSwitcher from './DarkModeSwitcher.vue'
import { useAuthStore } from '@/features/auth/store/authStore'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useApiHandler } from '@/composables/useApiHandler'
import Spinner from './Spinner.vue'

const authStore = useAuthStore()

const { loading, execute } = useApiHandler(authStore.logout)

async function doLogout() {
  await execute()
}

onMounted(() => initFlowbite())
</script>

<style scoped></style>
