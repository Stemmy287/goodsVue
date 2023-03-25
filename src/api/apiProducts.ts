import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const apiProducts = {
  getProducts(data: QueryParamsType) {
    return instance.get<{items: ProductType[]}>('items', {params: data})
  }
}

//types
export type ProductType = {
  "id": number
  "title": string
  "description": string
  "salesman": string
  "geo": string
  "typeOfProduct": string
  "typeOfSale": string
  "price": string
  "count": number
  "priceForItem": string
  "favorite": boolean
  "deal": boolean
  "paid": boolean
}

export type QueryParamsType = {
  typeOfSale: string | null
}
