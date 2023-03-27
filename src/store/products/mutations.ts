import {MutationTree} from "vuex";
import {ProductModuleType} from "@/store/products/index";
import {ProductType} from "@/api/apiProducts";

export const mutations: MutationTree<ProductModuleType> = {
  setProducts(state, products: ProductType[]) {
    state.products = products
  },
  setDealProducts(state, dealProducts: ProductType[]) {
    state.dealProducts = dealProducts
  },
  setTypeOfSale(state, typeOfSale: string | null) {
    state.queryParams.typeOfSale = typeOfSale
    localStorage.setItem('typeOfSale', JSON.stringify(typeOfSale))
  },
  setNameSearch(state, nameSearch: string) {
    state.nameSearch = nameSearch
    localStorage.setItem('nameSearch', nameSearch)
  }
}