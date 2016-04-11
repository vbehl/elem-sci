module.exports = {
  entry: "./src/js/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)|(bower_components)/,
        loader: "babel",
        query:{
          presets: ["es2015", "react"]
        }
      }
    ]
  }
}
