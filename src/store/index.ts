import {createStore} from 'vuex'
import {productModule} from "@/store/productModule";
import {ProductType, QueryParamsType} from "@/api/apiProducts";

export default createStore<RootStateType>({
  modules: {
    products: productModule
  }
})

//types
export type RootStateType = {
  products: ProductType[]
  dealProducts: ProductType[]
  isLoading: boolean
  isError: null | string
  queryParams: QueryParamsType
  nameSearch: string
}