// vite.config.js
import { defineConfig } from "file:///C:/Program/resume-template-vue-plugin/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Program/resume-template-vue-plugin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Program/resume-template-vue-plugin/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx({})],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
    },
    lib: {
      entry: "./packages/resume-template/index.js",
      name: "ru-button"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxQcm9ncmFtXFxcXHJlc3VtZS10ZW1wbGF0ZS12dWUtcGx1Z2luXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxQcm9ncmFtXFxcXHJlc3VtZS10ZW1wbGF0ZS12dWUtcGx1Z2luXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Qcm9ncmFtL3Jlc3VtZS10ZW1wbGF0ZS12dWUtcGx1Z2luL3ZpdGUuY29uZmlnLmpzXCI7Ly8gZmlsZW5hbWU6IHZpdGUuY29uZmlnLnRzXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gcGx1Z2luczogW3Z1ZSgpLCB2dWVKc3goe30pXSxcclxuIGJ1aWxkOiB7XHJcbiAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAvLyBcdThCRjdcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTkwQTNcdTRFOUJcdTRGNjBcdTc2ODRcdTVFOTNcdTRFMkRcdTRFMERcdTk3MDBcdTg5ODFcdTc2ODRcdTRGOURcdThENTZcclxuICAgICBleHRlcm5hbDogWyd2dWUnXSxcclxuICAgICBvdXRwdXQ6IHtcclxuICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHJcbiAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgIH0sXHJcbiAgIGxpYjoge1xyXG4gICAgIGVudHJ5OiAnLi9wYWNrYWdlcy9yZXN1bWUtdGVtcGxhdGUvaW5kZXguanMnLFxyXG4gICAgIG5hbWU6ICdydS1idXR0b24nLFxyXG4gICB9LFxyXG4gfSxcclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
