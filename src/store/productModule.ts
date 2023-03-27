import {apiProducts, ProductDealType, ProductType, QueryParamsType, UpdateProductType} from "@/api/apiProducts";
import {Module} from "vuex";
import {RootStateType} from "@/store/index";

export const productModule: Module<ProductModuleType, RootStateType> = {
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
      return state.dealProducts.reverse().filter(ps => ps.title.toLowerCase().includes(state.nameSearch.toLowerCase()))
    },
    favouritePageItem(state, getters: { sortedProductsByName: ProductType[], sortedDealProductsByName: ProductDealType[] }) {
      const favouriteProducts = getters.sortedProductsByName.filter(ps => ps.favourite)
      const favouriteDealProducts = getters.sortedDealProductsByName.filter(ps => ps.favourite)
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
    }
  },
  actions: {
    getFromLocalStorage({commit}) {
      const nameSearch = localStorage.getItem('nameSearch') as string
      const typeOfSale = JSON.parse(localStorage.getItem('typeOfSale') as string)
      commit('setNameSearch', nameSearch)
      commit('setTypeOfSale', typeOfSale)
    },
    async fetchProducts({state, commit}) {

      commit('app/setIsLoading', true, {root: true})

      const queryParams = state.queryParams

      try {
        const res = await apiProducts.getProducts(queryParams)
        commit('setProducts', res.data)
      } catch (e) {
        commit('app/setIsError', 'Error', {root: true})
      } finally {
        commit('app/setIsLoading', false, {root: true})
      }

    },
    async updateProduct({state, commit, dispatch}: any, payload: UpdateProductType) {

      commit('app/setIsLoading', true, {root: true})

      const product = state.products.find((pr: ProductType) => pr.id === payload.id)

      if (!product) {
        alert('product not found')
      }

      const modelUpdateData = {...product, ...payload.data}

      try {
        await apiProducts.updateProduct(modelUpdateData, payload.id)
        dispatch('fetchProducts')
      } catch (e) {
        commit('app/setIsError', 'Error', {root: true})
      } finally {
        commit('app/setIsLoading', false, {root: true})
      }
    },
    async fetchDealProducts({state, commit}) {

      commit('app/setIsLoading', true, {root: true})

      const queryParams = state.queryParams

      try {
        const res = await apiProducts.getDealProducts(queryParams)
        commit('setDealProducts', res.data)
      } catch (e) {
        commit('app/setIsError', 'Error', {root: true})
      } finally {
        commit('app/setIsLoading', false, {root: true})
      }

    },
    async createDealProduct({commit, dispatch}, payload: ProductType) {

      commit('app/setIsLoading', true, {root: true})

      const dealProduct = {...payload, id: `${payload.id}_${(payload.dealsCount + 1)}`, paid: false, favorite: false}

      try {
        await apiProducts.createDealProduct(dealProduct)
        dispatch('updateProduct', {data: {dealsCount: payload.dealsCount + 1}, id: payload.id})
      } catch (e) {
        commit('app/setIsError', 'Error', {root: true})
      } finally {
        commit('app/setIsLoading', false, {root: true})
      }

    },

    async updateDealProduct({state, commit, dispatch}: any, payload: UpdateProductType) {

      commit('app/setIsLoading', true, {root: true})

      const dealProducts = state.dealProducts.find((pr: ProductType) => pr.id === payload.id)

      if (!dealProducts) {
        alert('product not found')
      }
      const modelUpdateData = {...dealProducts, ...payload.data}

      try {
        await apiProducts.updateDealProduct(modelUpdateData, payload.id)
        dispatch('fetchDealProducts')
      } catch (e) {
        commit('app/setIsError', 'Error', {root: true})
      } finally {
        commit('app/setIsLoading', false, {root: true})
      }

    },
  },
  namespaced: true
}

export type ProductModuleType = {
  products: ProductType[]
  dealProducts: ProductType[]
  queryParams: QueryParamsType
  nameSearch: string
}