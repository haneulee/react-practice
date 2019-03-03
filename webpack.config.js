module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: __dirname + "/src/app.js", //__dirname : 현재 실행중인 스크립트가 포함된 디렉토리 이름
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    historyApiFallback: true,
    port: 7777
  }
};
