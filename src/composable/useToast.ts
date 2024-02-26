import { ref } from 'vue'

const DEFAULT_TIME_OUT = 4000

const onToast = ref<boolean>(false)
const timeOut = ref<number>(DEFAULT_TIME_OUT)
const toastMessage = ref<string>('toast_message')

function toast (message: string, time: number = DEFAULT_TIME_OUT) {
  timeOut.value = time
  onToast.value = true
  toastMessage.value = message
}

export default {
  toastMessage,
  timeOut,
  onToast,
  toast
}
