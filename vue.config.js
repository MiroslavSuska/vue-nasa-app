module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader").options({ fix: true });
  },
};
