import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const apiProducts = {
  getProducts(data: QueryParamsType) {
    return instance.get<ProductType[]>('products', {params: data})
  },
  getDealProducts(data: QueryParamsType) {
    return instance.get<ProductType[]>('dealProducts', {params: data})
  },
  createDealProduct(data: ProductDealType) {
    return instance.post('dealProducts', data)
  },
  updateDealProduct(data: ProductType, id: string) {
    return instance.patch(`dealProducts/${id}`, data)
  },
  updateProduct(data: ProductType, id: string) {
    return instance.patch(`products/${id}`, data)
  }
}

//types
export type ProductType = {
  id: string
  title: string
  description: string
  salesman: string
  geo: string
  typeOfProduct: string
  typeOfSale: string
  price: string
  count: number
  priceForItem: string
  favorite: boolean
  dealsCount: number
}

export type ProductDealType = ProductType & {paid: boolean}

export type QueryParamsType = {
  typeOfSale: string | null
}
