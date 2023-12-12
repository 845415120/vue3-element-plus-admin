const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // css 配置
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "src/styles/main.scss";`,
      },
    },
  },
});
