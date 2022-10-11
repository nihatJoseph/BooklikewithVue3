import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/style.css";

import store from "./store";
import router from "./router";
import appAxios from "@/utils/appAxios";

import appHeader from "@/components/Shared/appHeader";
import BookmarkList from "@/components/Shared/appBookmarkList/BookmarkList";

const app = createApp(App);

import io from "socket.io-client";
const socket = io("http://localhost:2018");

app.component("AppHeader", appHeader);
app.component("BookmarkList", BookmarkList);

app.use(router);
app.use(store);

app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$log = console.log;
app.config.globalProperties.$socket = socket;

app.mount("#app");
