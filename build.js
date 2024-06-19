import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const components = ["", "A", "B"];

const librarys = components.map((name) => {
  return {
    entry: `./packages/resume-template/index${name}.js`,
    name: `ru-resume-template${name}`,
    fileName: (format) => {
        return `ru-resume-template${name}.${format}.js`
    } 
  };
});

librarys.forEach(async lib => {
    await build({
        plugins: [vue(), vueJsx({})],
        configFile: false,
        sourcemap: true,
        build: {
          lib,
          assetsDir: "",
          emptyOutDir: false,
          rollupOptions: {},
        },
    });
})

