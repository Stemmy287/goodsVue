import {Module} from "vuex";
import {RootStateType} from "@/store/index";

export const appModule: Module<AppModuleType, RootStateType> = {
  state: () => ({
    isLoading: false,
    isError: null,
  }),
  mutations: {
    setIsLoading(state, isLoading: boolean) {
      state.isLoading = isLoading
    },
    setIsError(state, isError: string | null) {
      state.isError = isError
    }
  },
  namespaced: true
}

//type
export type AppModuleType = {
  isLoading: boolean
  isError: string | null
}