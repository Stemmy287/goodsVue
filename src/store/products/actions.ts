import {ActionTree} from "vuex";
import {ProductModuleType} from "@/store/products/index";
import {RootStateType} from "@/store";
import {apiProducts, ProductType, UpdateProductType} from "@/api/apiProducts";

export const actions: ActionTree<ProductModuleType, RootStateType> = {

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

  }
}