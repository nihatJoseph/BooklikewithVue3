import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/style.css";

import router from "./router";
import appAxios from "@/utils/appAxios";

import appHeader from "@/components/Shared/appHeader";
import BookmarkList from "@/components/Shared/appBookmarkList/BookmarkList";

const app = createApp(App);

app.component("AppHeader", appHeader);
app.component("BookmarkList", BookmarkList);

app.use(router);

app.config.globalProperties.$appAxios = appAxios;

app.mount("#app");
