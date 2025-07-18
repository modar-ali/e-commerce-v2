<template>
  <div
    :id="modalId"
    tabindex="-1"
    aria-hidden="true"
    class="hidden bg-gray-900/80 bg-opacity overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h3>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <form class="max-w-sm mx-auto grid gap-4">
            <div class="flex justify-center space-x-2 rtl:space-x-reverse">
              <div>
                <label for="code-1" class="sr-only">First code</label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-next="code-2"
                  id="code-1"
                  class="block w-10 h-10 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  v-model="digit1"
                />
              </div>
              <div>
                <label for="code-2" class="sr-only">Second code</label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-1"
                  data-focus-input-next="code-3"
                  id="code-2"
                  class="block w-10 h-10 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  v-model="digit2"
                />
              </div>
              <div>
                <label for="code-3" class="sr-only">Third code</label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-2"
                  data-focus-input-next="code-4"
                  id="code-3"
                  class="block w-10 h-10 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  v-model="digit3"
                />
              </div>
              <div>
                <label for="code-4" class="sr-only">Fourth code</label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-3"
                  data-focus-input-next="code-5"
                  id="code-4"
                  class="block w-10 h-10 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  v-model="digit4"
                />
              </div>
              <div>
                <label for="code-5" class="sr-only">Fifth code</label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-4"
                  data-focus-input-next="code-6"
                  id="code-5"
                  class="block w-10 h-10 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  v-model="digit5"
                />
              </div>
              <div>
                <label for="code-6" class="sr-only">Sixth code</label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-5"
                  id="code-6"
                  class="block w-10 h-10 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                  v-model="digit6"
                />
              </div>
            </div>
            <p
              id="helper-text-explanation"
              class="w-fit mx-auto text-sm text-gray-500 dark:text-gray-400"
            >
              Please introduce the 6 digit code we sent via email.
            </p>
          </form>
          <div class="flex justify-center items-center gap-4">
            <button
              @click="doVerify"
              type="button"
              class="w-32 inline-flex cursor-pointer items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                v-if="verifyLoading"
                :disabled="verifyLoading"
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
              <span>{{ verifyLoading ? 'Verifing…' : 'Verify' }}</span>
            </button>
            <button
              @click="doResendCode"
              :disabled="resendLoading"
              type="button"
              class="w-32 inline-flex cursor-pointer items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                v-if="resendLoading"
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
                resendLoading ? 'Resending code…' : 'Resend code'
              }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="body"
      ><Alert
        :status="verifyStatus"
        :error="verifyError"
        :duration="5000"
      ></Alert
    ></Teleport>
    <Teleport to="body"
      ><Alert
        :status="resendStatus"
        :error="resendError"
        :duration="5000"
      ></Alert
    ></Teleport>
  </div>
</template>

<script setup lang="ts">
import { Modal } from 'flowbite'
import { ref, computed, onMounted, watch } from 'vue'
import { initPinCodeFocusHandler } from '@/services/flowbite_logic/initPinCodeFocusHandler'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
import Alert from '@/components/Alert.vue'
import type { AuthResponse } from '../types'
import { useApiHandler } from '@/composables/useApiHandler'

const { status, modalId, title, onVerify, onResendCode, pushTo } = defineProps<{
  status: string | null
  modalId: string
  title: string
  onVerify: (payload?: { code: string; email: string }) => Promise<AuthResponse>
  onResendCode: () => Promise<AuthResponse>
  pushTo?: string
}>()

const emit = defineEmits<{
  (e: 'submitCode', code: string): void
}>()

let modal: Modal | null = null

onMounted(() => {
  const $targetEl = document.getElementById(modalId)
  if ($targetEl) {
    modal = new Modal($targetEl, { backdrop: 'static', closable: false })
    if (status === 'success') {
      modal.show()
    }
  }

  initPinCodeFocusHandler()
})

watch(
  () => status,
  (newStatus) => {
    if (newStatus === 'success' && modal) {
      modal.show()
    }
  }
)

const authStore = useAuthStore()
const router = useRouter()

const digit1 = ref('')
const digit2 = ref('')
const digit3 = ref('')
const digit4 = ref('')
const digit5 = ref('')
const digit6 = ref('')

const code = computed(() =>
  [
    digit1.value,
    digit2.value,
    digit3.value,
    digit4.value,
    digit5.value,
    digit6.value,
  ].join('')
)

const {
  loading: verifyLoading,
  status: verifyStatus,
  message: verifyMessage,
  error: verifyError,
  execute: verify,
} = useApiHandler(onVerify)

async function doVerify() {
  // if (code.value.length < 6) {
  //   verifyError.value = 'Please enter all 6 digits'
  //   return
  // }

  const response = await verify({
    code: code.value,
    email: authStore.user!.email,
  })
  if (response && response.status === 'success') {
    emit('submitCode', code.value)
    modal?.hide()
    router.push({ name: pushTo })
  }
}

const {
  loading: resendLoading,
  status: resendStatus,
  message: resendMessage,
  error: resendError,
  execute: resendCode,
} = useApiHandler(onResendCode)

async function doResendCode() {
  const response = await resendCode({
    email: authStore.user!.email,
  })
}
</script>

<style scoped></style>
