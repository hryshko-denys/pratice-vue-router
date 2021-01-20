import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import "./theme.css";
import translatePlagin from './plagins/translatePlagin'

const app = createApp(App)

app.use(translatePlagin)
app.use(router)
app.mount("#app");
