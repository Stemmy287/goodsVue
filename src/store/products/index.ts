import {Module} from "vuex";
import {ProductDealType, ProductType, QueryParamsType} from "@/api/apiProducts";
import {RootStateType} from "@/store";
import {getters} from "@/store/products/getters";
import {mutations} from "@/store/products/mutations";
import {actions} from "@/store/products/actions";

const state: ProductModuleType = {
  products: [] as ProductType[],
  dealProducts: [] as ProductDealType[],
  queryParams: {
    typeOfSale: null
  },
  nameSearch: ''
}

export const products: Module<ProductModuleType, RootStateType> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

//types
export type ProductModuleType = {
  products: ProductType[]
  dealProducts: ProductType[]
  queryParams: QueryParamsType
  nameSearch: string
}