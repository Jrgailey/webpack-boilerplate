module.exports = {
  entry: ['./global.js', './app.js'],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  watch: true,
  module: {
    preLoaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'jshint-loader'

     }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loaders: ['style','css','less']
      },
      {
        test: /\.html$/,
        name: 'mandrillTemplates',
        loader: 'raw!html-minify'
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: ['url?limit=10000','img?progressive=true']
      // }
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
    }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}
