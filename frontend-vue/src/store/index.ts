import { createStore } from 'vuex'

export interface PhotoStore {
  id: string
  url: URL
}

export interface UserStore {
  id: string
  username: string
  firstname: string
  lastname: string
  avatarUrl: URL | null
}

enum Severity {
  Error,
  Warning,
  OK
}
export interface NotificationStore {
  id: Number
  message: string
  severity: Severity
}

export interface State {
  photos: PhotoStore[]
  selectedPhotos: PhotoStore[]
  user: UserStore | null
  notifications: NotificationStore[],
  isSidebarActive: boolean,
}

export default createStore<State>({
  state: {
    photos: [],
    selectedPhotos: [],
    user: null,
    notifications: [],
    isSidebarActive: false,
  },
  mutations: {
    setNotification(state, notification: NotificationStore) {
      state.notifications.push(notification)
    },
    deleteNotification(state, notificationId) {
      state.notifications = state.notifications.filter(n => n.id !== notificationId)
    },
    toggleSidebar(state) {
      state.isSidebarActive = !state.isSidebarActive
    },
    closeSidebarPanel(state) {
      state.isSidebarActive = false
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user === null
    }
  },
  actions: {
    fetchPhotos({ state }) {
      for (let x=400; x<=450; x++) {
        state.photos.push({
          id: x.toString(),
          url: new URL(`https://picsum.photos/seed/${x}/200/200`)
        })
      }
    },
    emitErrorMessage({commit, state}, message) {
      const notifId = state.notifications.length+1
      commit('setNotification', {id: notifId, message: message, severity: Severity.Error})
      setTimeout(() => {
        commit('deleteNotification', notifId)
      }, 5000)
    }
  }
})
