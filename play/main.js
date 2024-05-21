import { createApp } from "vue";
import App from "./App.vue";
import RuButton from "ru-resume-test-button/index.js"

const app = createApp(App)
app.use(RuButton)
app.mount("#app")