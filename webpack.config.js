// node path 라이브러리를 가져옴.
var path = require('path')

module.exports = {
    mode: 'none',
    /** 빌드를 할 대상 파일(최초 진입점)
     entry 속성에 지정된 파일에는 웹 어플리케이션의 전반적인
     구조와 내용이 담겨져 있어야 함. 웹팩이 해당 파일을 가지고 웹 어플리케이션에서
     사용되는 모듈들의 연관관계를 이해하고 분석
     */
    entry: './src/index.js',
    // 빌드를 하고나서 나온 결과물에 대한 정의
    output: {
        // [name].[hash].bundle.js
        // chunkhash : 모듈 내용 기준으로 생성된 해시 값(새로고침 안해도됨)
        filename: '[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // entry에서 output으로 도출하는 과정에서 개입하는 곳
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                /**
                 * 로더는 웹팩이 웹 어플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원들을
                 * 변환할 수 있도록 도와주는 속성임
                 */
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
}