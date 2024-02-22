// import { mount } from '@vue/test-utils'

function sleep (time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

test("Deve logar-se" , async () => {
  sleep(20)
})
