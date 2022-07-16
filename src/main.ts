import { createPinia } from "pinia";
import { Component, createApp } from "vue";
import App from "./App.vue";

const app = createApp(App as Component);
const store = createPinia();

app.use(store);
app.mount("#app");
