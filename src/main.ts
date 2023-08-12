import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js';
import BookFilter from './components/BookFilter.vue'
import BookList from './components/BookList.vue'

const app = createApp(App)

app.use(router)
app.use(store)


app.component('book-filter', BookFilter);
app.component('book-list', BookList);


app.mount('#app')
