import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
    setBookmark(state, user) {
      state.bookmarks = user;
    },
    setLikes(state, bookmarkIds) {
      state.user.likes = bookmarkIds;
    },
    setBookmarks(state, bookmarkIds) {
      state.user.bookmarks = bookmarkIds;
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user != null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _userLikes: (state) => state.user?.likes || [],
    _userBookmarks: (state) => state.user?.bookmarks || [],
    _saltKey: (state) => state.saltKey,
  },
  plugins: [
    new VuexPersistence({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }).plugin,
  ],
});
