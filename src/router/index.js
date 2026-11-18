import { createRouter, createWebHashHistory } from 'vue-router'

// Cada rota usa import() dinâmico: a página só é baixada quando alguém entra nela
const routes = [
  { path: '/', name: 'inicio', component: () => import('../views/InicioView.vue') },
  { path: '/viewport', name: 'viewport', component: () => import('../views/ViewportView.vue') },
  { path: '/unidades', name: 'unidades', component: () => import('../views/UnidadesView.vue') },
  { path: '/flex-grid', name: 'flex-grid', component: () => import('../views/FlexGridView.vue') },
  { path: '/imagens', name: 'imagens', component: () => import('../views/ImagensView.vue') },
  { path: '/boas-praticas', name: 'boas-praticas', component: () => import('../views/BoasPraticasView.vue') },
  { path: '/desafio', name: 'desafio', component: () => import('../views/DesafioView.vue') },
]

// Hash (#/rota) evita erro 404 ao atualizar a página no GitHub Pages
export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
