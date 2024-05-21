import RuButton from "./lib/button.vue";

export default  {
    install: (app) => {
        app.component(RuButton.name, RuButton);
    }
}