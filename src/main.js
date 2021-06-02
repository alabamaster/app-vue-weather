import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js" // автоматически ищет index.js в папке

import "./styles/normalize.css";
import "./styles/scss/main.scss";

createApp(App).use(store).mount("#app");
