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
              class="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              verify
            </button>
            <button
              @click="doResendCode"
              type="button"
              class="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Resend code
            </button>
          </div>
        </div>
      </div>
    </div>
    <Alert :status="verifyStatus" :duration="5000">{{ verifyError }}</Alert>
    <Alert :status="resendStatus" :duration="5000">{{ resendError }}</Alert>
  </div>
</template>

<script setup lang="ts">
import { Modal } from 'flowbite'
import { ref, computed, onMounted } from 'vue'
import { initPinCodeFocusHandler } from '@/services/flowbite_logic/initPinCodeFocusHandler'
import { useRouter } from 'vue-router'
import Alert from '@/components/Alert.vue'

const { status, modalId, title, onVerify, onResendCode, pushTo } = defineProps<{
  status: string | null
  modalId: string
  title: string
  onVerify: (code: string) => Promise<{ status: string; message: string }>
  onResendCode: () => Promise<{ status: string; message: string }>
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

const router = useRouter()

const loading = ref(false)
const verifyError = ref<string | null>(null)
const verifyStatus = ref('')

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

const doVerify = async () => {
  if (code.value.length < 6) {
    verifyError.value = 'Please enter all 6 digits'
    return
  }

  loading.value = true
  verifyError.value = null

  try {
    const { status, message } = await onVerify(code.value)

    verifyStatus.value = status

    if (status === 'success') {
      emit('submitCode', code.value)
      modal?.hide()
      router.push({ name: pushTo })
    } else {
      verifyError.value = message
    }
  } catch (err: any) {
    verifyError.value = err.message || 'Verification failed, Please try again.'
  } finally {
    loading.value = false
  }
}

const resendStatus = ref('')
const resendError = ref<string | null>(null)

const doResendCode = async () => {
  try {
    const { status } = await onResendCode()
    resendStatus.value = status
  } catch (err: any) {
    resendError.value = err.message || 'Resend code failed, Please try again.'
  }
}
</script>

<style scoped></style>
