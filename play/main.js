import { createApp } from "vue";
import App from "./App.vue";
import ResumeTemplate from "ru-resume-template"

const app = createApp(App)
app.use(ResumeTemplate)
app.mount("#app")