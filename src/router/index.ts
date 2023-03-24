import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import StockPage from "@/Pages/StockPage.vue";
import FavoritePage from "@/Pages/FavoritePage.vue";
import DealsPage from "@/Pages/DealsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: StockPage
  },
  {
    path: '/favourite',
    component: FavoritePage
  },
  {
    path: '/deals',
    component: DealsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
