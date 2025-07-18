import { ref, watch, type Ref } from 'vue'
import { computed } from 'vue'

export function usePagination(options: {
  page: Ref<number>
  currentPage: Ref<number>
  lastPage: Ref<number>
  onPageChange: () => unknown
}) {
  const page = options.page
  const currentPage = ref(options.currentPage)
  const lastPage = ref(options.lastPage)

  const isFirstPage = computed(() => currentPage.value <= 1)
  const isLastPage = computed(() => currentPage.value >= lastPage.value)

  const prev = () => {
    if (!isFirstPage.value) page.value--
  }

  const next = () => {
    if (!isLastPage.value) page.value++
  }

  watch(page, options.onPageChange, { immediate: true })

  return {
    isFirstPage,
    isLastPage,
    prev,
    next,
  }
}
