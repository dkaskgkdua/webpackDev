var path = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: '[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader']

        }]
    },
    /**
     * 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성
     * 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면,
     * 플러그인은 해당 결과물의 형태를 바꾸는 역할
     */
    plugins: [
        new MiniCssExtractPlugin()
    ],
}