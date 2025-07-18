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
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Change your password
          </h1>
          <form
            @submit.prevent="doResetPassword"
            class="space-y-4 md:space-y-6"
          >
            <div>
              <label
                for="new-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >New password</label
              >
              <input
                type="password"
                name="new-password"
                id="new-password"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                v-model="form.newPassword"
              />
              <p
                v-if="fieldErrors?.new_password"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                v-for="err of fieldErrors?.new_password"
                :key="err"
              >
                {{ err }}
              </p>
            </div>
            <div>
              <label
                for="new-passwrod-confirmation"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm new password</label
              >
              <input
                type="password"
                name="new_passwrod_confirmation"
                id="new-passwrod-confirmation"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                v-model="form.confirmNewPassword"
              />
              <p
                v-if="fieldErrors?.new_passwrod_confirmation"
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                v-for="err of fieldErrors?.new_passwrod_confirmation"
                :key="err"
              >
                {{ err }}
              </p>
            </div>
            <button
              :disabled="forgotLoading"
              type="submit"
              class="w-full inline-flex cursor-pointer items-center justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                v-if="forgotLoading"
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
              <span>{{
                forgotLoading ? 'Changing password…' : 'Change password'
              }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <VerificationModal
      :status="forgotStatus"
      modalId="verify-reset-code-modal"
      title="Verify password reset code"
      :onVerify="verifyResetPasswordWrapper"
      :onResendCode="resendPasswordResetCodeWrapper"
      @submit-code="assignCode"
    />
    <Teleport to="body"
      ><Alert
        :status="forgotStatus"
        :error="forgotError"
        :duration="5000"
      ></Alert
    ></Teleport>
    <Teleport to="body"
      ><Alert :status="resetStatus" :error="resetError" :duration="5000"></Alert
    ></Teleport>
  </section>
</template>

<script setup lang="ts">
import VerificationModal from '@/features/auth/components/VerificationModal.vue'
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/features/auth/store/authStore'
import { useRouter } from 'vue-router'
import Alert from '@/components/Alert.vue'
import { useApiHandler } from '@/composables/useApiHandler'

const authStore = useAuthStore()
const router = useRouter()

const {
  loading: forgotLoading,
  status: forgotStatus,
  message: forgotMessage,
  error: forgotError,
  execute: doForgetPassword,
} = useApiHandler(authStore.forgotPassword)

onMounted(async () => {
  await doForgetPassword({ email: authStore.user!.email })
})

const verifyResetPasswordWrapper = (payload?: {
  code: string
  email: string
}) => authStore.verifyResetPassword(payload)

const resendPasswordResetCodeWrapper = (payload?: { email: string }) =>
  authStore.resendPasswordResetCode(payload)

const code = ref('')

function assignCode(c: string) {
  code.value = c
}

const form = ref({
  newPassword: '',
  confirmNewPassword: '',
})

const {
  loading: resetLoading,
  status: resetStatus,
  message: resetMessage,
  error: resetError,
  fieldErrors,
  execute: resetPassword,
} = useApiHandler(authStore.resetPassword)

async function doResetPassword() {
  const response = await resetPassword({
    email: authStore.user!.email,
    code: code.value,
    new_password: form.value.newPassword,
    new_passwrod_confirmation: form.value.confirmNewPassword,
  })
  if (response && response.status === 'success') {
    router.push({ name: 'Login' })
  }
}
</script>

<style scoped></style>
