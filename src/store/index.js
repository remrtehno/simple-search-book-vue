import { createStore } from 'vuex';
import authModule from './auth/index.js';
import booksModule from './books/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    books: booksModule
  }
});

export default store;