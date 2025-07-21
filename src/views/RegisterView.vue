<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
      </a>
      <div
        class="justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-sm xl:p-0 dark:bg-gray-800"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form @submit.prevent="doRegister" class="space-y-4 md:space-y-6">
            <div
              class="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6"
            >
              <div class="w-full">
                <label
                  for="fname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >First name</label
                >
                <input
                  name="first_name"
                  type="text"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  v-model.trim="form.first_name"
                />
                <p
                  v-if="fieldErrors?.first_name"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                  v-for="err of fieldErrors?.first_name"
                  :key="err"
                >
                  {{ err }}
                </p>
              </div>
              <div class="w-full">
                <label
                  for="lname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Last name</label
                >
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  v-model.trim="form.last_name"
                />
                <p
                  v-if="fieldErrors?.last_name"
                  class="mt-2 text-sm text-red-600 dark:text-red-500"
                  v-for="err of fieldErrors?.last_name"
                  :key="err"
                >
                  {{ err }}
                </p>
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                v-model.trim="form.email"
              />
              <p
                v-if="fieldErrors?.email"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                v-for="err of fieldErrors?.email"
                :key="err"
              >
                {{ err }}
              </p>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                v-model.trim="form.password"
              />
              <p
                v-if="fieldErrors?.password"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                v-for="err of fieldErrors?.password"
                :key="err"
              >
                {{ err }}
              </p>
            </div>
            <div>
              <label
                for="cpassword"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <input
                type="password"
                name="password_confirmation"
                id="cpassword"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                v-model.trim="form.password_confirmation"
              />
              <p
                v-if="fieldErrors?.password_confirmation"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                v-for="err of fieldErrors?.password_confirmation"
                :key="err"
              >
                {{ err }}
              </p>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="notifications"
                  aria-describedby="notifications"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="notifications"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Subscribe on email</label
                >
              </div>
            </div>
            <button
              :disabled="loading"
              type="submit"
              class="w-full inline-flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                v-if="loading"
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              <span>{{ loading ? 'Registering…' : 'Register' }}</span>
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <RouterLink
                :to="{ name: 'Login' }"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login</RouterLink
              >
            </p>
          </form>
        </div>
      </div>
    </div>
    <VerificationModal
      :status="status"
      modalId="verify-email-modal"
      title="Verify your email"
      :onVerify="verifyEmailWrapper"
      :onResendCode="resendVerificationCodeWrapper"
      push-to="Home"
    />
    <Teleport to="body"
      ><Alert :status="status" :error="error" :duration="5000"></Alert
    ></Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/features/auth/store/authStore'
import VerificationModal from '@/features/auth/components/VerificationModal.vue'
import Alert from '@/components/Alert.vue'
import { useApiHandler } from '@/composables/useApiHandler'

const authStore = useAuthStore()

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  wants_notifications: false,
})

const { loading, status, message, error, fieldErrors, execute } = useApiHandler(
  authStore.register
)

async function doRegister() {
  await execute(form.value)
}

const verifyEmailWrapper = (payload?: { code: string; email: string }) =>
  authStore.verifyEmail(payload)

const resendVerificationCodeWrapper = (payload?: { email: string }) =>
  authStore.resendVerificationCode(payload)
</script>

<style scoped></style>
