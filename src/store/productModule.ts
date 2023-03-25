import {apiProducts, ProductType, QueryParamsType} from "@/api/apiProducts";

export const productModule = {
  state: (): RootStateType => ({
    products: [] as ProductType[],
    queryParams: {
      typeOfSale: null
    },
    localQueryParams: {
      nameSearch: ''
    }
  }),
  getters: {
    sortedProductsByName(state: RootStateType) {
      return state.products.filter(ps => ps.title.toLowerCase().includes(state.localQueryParams.nameSearch.toLowerCase()))
    },
    dealPageItem(state: RootStateType, getters: { sortedProductsByName: ProductType[] }) {
      return getters.sortedProductsByName.filter(ps => ps.deal)
    },
    favouritePageItem(state: RootStateType, getters: { sortedProductsByName: ProductType[] }) {
      return getters.sortedProductsByName.filter(ps => ps.favorite)
    }
  },
  mutations: {
    setProducts(state: RootStateType, products: ProductType[]) {
      state.products = products
    },
    setTypeOfSale(state: RootStateType, typeOfSale: string | null) {
      state.queryParams.typeOfSale = typeOfSale
    },
    setNameSearch(state: RootStateType, nameSearch: string) {
      state.localQueryParams.nameSearch = nameSearch
    }
  },
  actions: {
    async fetchProducts({state, commit}: any) {
      const queryParams = state.queryParams

      try {
        const res = await apiProducts.getProducts(queryParams)
        commit('setProducts', res.data)
      } catch (e) {
        alert('error')
      }
    },
    async updateProduct({
                          state,
                          commit,
                          dispatch
                        }: any, payload: { data: { "favorite": boolean, "deal": boolean, "paid": boolean }, id: number }) {

      const product = state.products.find((pr: ProductType) => pr.id === payload.id)

      if (!product) {
        alert('product not found')
      }
      const modelUpdateData = {...product, ...payload.data}
      try {
        await apiProducts.updateProduct(modelUpdateData, payload.id)
        dispatch('fetchProducts')
      } catch (e) {
        alert('error')
      }
    },
  },

  namespaced: true
}

//types
export type RootStateType = {
  products: ProductType[]
  queryParams: QueryParamsType
  localQueryParams: LocalQueryParamsType
}

export type LocalQueryParamsType = {
  nameSearch: string
}