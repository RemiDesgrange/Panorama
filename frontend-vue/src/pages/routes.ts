import { Component } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import ViewAllAlbums from './albums/ViewAllAlbums.vue'
import ViewAlbum from './albums/ViewAlbum.vue'
import NewAlbum from './albums/NewAlbum.vue'

export interface Routes {
  path: string
  name: string
  component: Component
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/albums',
    name: 'albums',
    component: ViewAllAlbums
  },
  {
    path: '/album/:albumId',
    name: 'album',
    component: ViewAlbum
  },
  {
    path: '/album/new',
    name: 'newAlbum',
    component: NewAlbum
  }
] as Routes[]

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
