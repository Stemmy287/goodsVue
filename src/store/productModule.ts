import {apiProducts, ProductDealType, ProductType, UpdateProductType} from "@/api/apiProducts";
import {Module} from "vuex";
import {RootStateType} from "@/store/index";

export const productModule: Module<RootStateType, RootStateType> = {
  state: () => ({
    products: [] as ProductType[],
    dealProducts: [] as ProductDealType[],
    queryParams: {
      typeOfSale: null
    },
    nameSearch: ''
  }),
  getters: {
    sortedProductsByName(state) {
      return state.products.filter(ps => ps.title.toLowerCase().includes(state.nameSearch.toLowerCase()))
    },
    sortedDealProductsByName(state) {
      return state.dealProducts.filter(ps => ps.title.toLowerCase().includes(state.nameSearch.toLowerCase()))
    },
    favouritePageItem(state, getters: { sortedProductsByName: ProductType[], sortedDealProductsByName: ProductDealType[] }) {
      const favouriteProducts = getters.sortedProductsByName.filter(ps => ps.favorite)
      const favouriteDealProducts = getters.sortedDealProductsByName.filter(ps => ps.favorite)
      return [...favouriteProducts, ...favouriteDealProducts]
    }
  },
  mutations: {
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
    },
  },
  actions: {
    getFromLocalStorage({commit}) {
      const nameSearch = localStorage.getItem('nameSearch') as string
      const typeOfSale = JSON.parse(localStorage.getItem('typeOfSale') as string)
      commit('setNameSearch', nameSearch)
      commit('setTypeOfSale', typeOfSale)
    },
    async fetchProducts({state, commit}) {

      const queryParams = state.queryParams

      try {
        const res = await apiProducts.getProducts(queryParams)
        commit('setProducts', res.data)
      } catch (e) {
        alert('error')
      }

    },
    async updateProduct({state, dispatch}: any, payload: UpdateProductType) {

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
    async fetchDealProducts({state, commit}) {

      const queryParams = state.queryParams

      try {
        const res = await apiProducts.getDealProducts(queryParams)
        commit('setDealProducts', res.data)
      } catch (e) {
        alert('error')
      }

    },
    async createDealProduct({dispatch}, payload: ProductType) {

      const dealProduct = {...payload, id: `${payload.id}_${(payload.dealsCount + 1)}`, paid: false, favorite: false}

      try {
        await apiProducts.createDealProduct(dealProduct)
        dispatch('updateProduct', {data: {dealsCount: payload.dealsCount + 1}, id: payload.id})
      } catch (e) {
        alert('error')
      }

    },

    async updateDealProduct({state, dispatch}: any, payload: UpdateProductType) {

      const dealProducts = state.dealProducts.find((pr: ProductType) => pr.id === payload.id)

      if (!dealProducts) {
        alert('product not found')
      }
      const modelUpdateData = {...dealProducts, ...payload.data}

      try {
        await apiProducts.updateDealProduct(modelUpdateData, payload.id)
        dispatch('fetchDealProducts')
      } catch (e) {
        alert('error')
      }

    },
  },

  namespaced: true
}