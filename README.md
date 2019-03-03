\*\* babel setting

.babelrc : 바벨 실행을 위한 기본 설정 파일
babel src -d build
build디렉토리의 sample.js는 src디렉토리의 js를 es6 > es5로 변경함

\*바벨로 트랜스파일 할 때, source map 생성
npm install babel-plugin-source-map-support --save-dev
babel src/test1.js -o build/test1.js --source-maps
babel src -d build --source-maps
