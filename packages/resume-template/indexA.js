import ResumeTemplateA from "./lib/ResumeTemplateA.vue";

export default  {
    install: (app) => {
        app.component(ResumeTemplateA.name, ResumeTemplateA);
    }
}