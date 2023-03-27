import {createStore} from 'vuex'
import {ProductModuleType} from "@/store/products";
import {products} from "@/store/products";
import {app, AppModuleType} from "@/store/app";

export default createStore<RootStateType>({
  modules: {
    products,
    app
  }
})

//type
export type RootStateType = ProductModuleType & AppModuleType