import {GetterTree} from "vuex";
import {ProductModuleType} from "@/store/products/index";
import {RootStateType} from "@/store";
import {ProductDealType, ProductType} from "@/api/apiProducts";

export const getters: GetterTree<ProductModuleType, RootStateType> = {
  sortedProductsByName(state) {
    return state.products.filter(ps => ps.title.toLowerCase().includes(state.nameSearch.toLowerCase()))
  },
  sortedDealProductsByName(state) {
    return state.dealProducts.reverse().filter(ps => ps.title.toLowerCase().includes(state.nameSearch.toLowerCase()))
  },
  favouritePageItem(state, getters: { sortedProductsByName: ProductType[], sortedDealProductsByName: ProductDealType[] }) {
    const favouriteProducts = getters.sortedProductsByName.filter(ps => ps.favourite)
    const favouriteDealProducts = getters.sortedDealProductsByName.filter(ps => ps.favourite)
    return [...favouriteProducts, ...favouriteDealProducts]
  }
}