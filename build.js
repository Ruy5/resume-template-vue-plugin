import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const components = ["", "A", "B"];

const librarys = components.map((name) => {
  return {
    entry: `./packages/resume-template/index${name}.js`,
    name: `ru-resume-template${name}`,
    fileName: (format) => {
      return `ru-resume-template${name}.${format}.js`;
    },
  };
});

librarys.forEach(async (lib) => {
  await build({
    plugins: [vue(), vueJsx({})],
    configFile: false,
    sourcemap: true,
    build: {
      lib,
      assetsDir: "",
      emptyOutDir: false,
      rollupOptions: {
        // 请确保外部化那些你的库中不需要的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
});
