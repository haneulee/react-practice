module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: __dirname + "/src/main.js", //__dirname : 현재 실행중인 스크립트가 포함된 디렉토리 이름
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    historyApiFallback: true,
    port: 7777
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.json$/,
    //     loader: "json-loader"
    //   }
    // ],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
