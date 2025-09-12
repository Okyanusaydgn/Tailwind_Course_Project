// CommonJS
const path = require("path");

module.exports = {
  mode: "development", // prod için: "production"
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/dist/", // dev-server, bundle'ı /dist/bundle.js olarak servis etsin
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", // CSS'i <style> tagıyla enjekte eder
          "css-loader", // @import ve url() çözer
          {
            loader: "postcss-loader", // Tailwind + Autoprefixer
            options: {
              postcssOptions: {
                plugins: [
                  require("@tailwindcss/postcss"),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",

  // 🔥 Canlı geliştirme
  devServer: {
    static: { directory: __dirname }, // kökten index.html servis et
    port: 3000,
    open: true,
    hot: true,
    devMiddleware: {
      publicPath: "/dist/", // RAM'deki bundle'ı /dist/ altında sun
    },
  },
};
