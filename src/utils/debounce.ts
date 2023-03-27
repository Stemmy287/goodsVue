export const debounce = (func: any, ms: number) => {

  let timer: number

  return () => {

    clearTimeout(timer)

    timer = setTimeout(() => {

      func()

    }, ms)

  }

}