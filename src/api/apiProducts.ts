import axios, {AxiosResponse} from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const apiProducts = {
  getProducts(data: QueryParamsType) {
    return instance.get<ProductType[]>('products', {params: data})
  },
  updateProduct(data: ProductType, id: string) {
    return instance.patch<'', AxiosResponse<ProductType>, ProductType>(`products/${id}`, data)
  },
  getDealProducts(data: QueryParamsType) {
    return instance.get<ProductType[]>('dealProducts', {params: data})
  },
  createDealProduct(data: ProductDealType) {
    return instance.post<'', AxiosResponse<ProductDealType>, ProductDealType>('dealProducts', data)
  },
  updateDealProduct(data: ProductDealType, id: string) {
    return instance.patch<'', AxiosResponse<ProductDealType>, ProductDealType>(`dealProducts/${id}`, data)
  },
}

//types
export type ProductType = {
  id: string
  title: string
  img: string
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

export type UpdateProductType = {
  data: {
    paid?: boolean
    favorite: boolean
  }
  id: string
}
