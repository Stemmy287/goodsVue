import {createStore, StoreOptions} from 'vuex'
import {productModule, RootStateType} from "@/store/productModule";

export default createStore({
  modules: {
    products: productModule
  }
})

export type StateType = ReturnType<typeof createStore>