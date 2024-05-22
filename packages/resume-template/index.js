import ResumeTemplateA from "./lib/ResumeTemplateA.vue";
import ResumeTemplateB from "./lib/ResumeTemplateB.vue";

export default  {
    install: (app) => {
        app.component(ResumeTemplateA.name, ResumeTemplateA);
        app.component(ResumeTemplateB.name, ResumeTemplateB);
    }
}