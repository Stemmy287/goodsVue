import {createStore} from 'vuex'
import {productModule} from "@/store/productModule";

export default createStore({
  modules: {
    products: productModule
  }
})