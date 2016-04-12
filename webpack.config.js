

module.exports = {
  entry: "./src/js/Main.js", // "only" prevents reload on syntax errors]
  output: {
    path:'/public',
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)|(bower_components)/,
        loader: ["babel"],
        query:{
          presets: ["es2015", "react"]
        }
      }
    ]
  }
]
}
