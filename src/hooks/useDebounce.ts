import {useStore} from "vuex";

export const useDebounce = () => {
  let timer: number

  const store = useStore()

  const setNameSearch = (nameSearch: string) => {

    clearTimeout(timer)

    timer = setTimeout(() => {
      store.commit('products/setNameSearch', nameSearch)
    }, 750)

  }

  return {setNameSearch}
}