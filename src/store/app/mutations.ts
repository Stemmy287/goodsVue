import {MutationTree} from "vuex";
import {AppModuleType} from "@/store/app/index";

export const mutations: MutationTree<AppModuleType> = {
  setIsLoading(state, isLoading: boolean) {
    state.isLoading = isLoading
  },
  setIsError(state, isError: string | null) {
    state.isError = isError
  }
}