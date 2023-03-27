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
  queryParams: QueryParamsType
  nameSearch: string
}