import {Module} from "vuex";
import {RootStateType} from "@/store";
import {mutations} from "@/store/app/mutations";

const state: AppModuleType = {
  isLoading: false,
  isError: null,
}

export const app: Module<AppModuleType, RootStateType> = {
  state,
  mutations,
  namespaced: true
}

//type
export type AppModuleType = {
  isLoading: boolean
  isError: string | null
}