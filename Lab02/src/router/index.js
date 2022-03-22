import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ajout from '../views/ajout.vue'
import modification from '../views/modification.vue'
import produit from '../views/produit.vue'
import list from '../views/list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/list',
      name:'list',
      component:list
    },
    {
      path:'/ajout',
      name:'ajout',
      component:ajout
    },
    {
      path:'/modification',
      name:'modification',
      component:modification
    },
    {
      path:'/produit',
      name:'produit',
      component:produit
    },
  ]
})

export default router
