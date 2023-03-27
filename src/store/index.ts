import {createStore} from 'vuex'
import {productModule, ProductModuleType} from "@/store/productModule";
import {appModule, AppModuleType} from "@/store/appModule";

export default createStore<RootStateType>({
  modules: {
    products: productModule,
    app: appModule
  }
})

//type
export type RootStateType = ProductModuleType & AppModuleType