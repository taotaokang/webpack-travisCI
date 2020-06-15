// 冒烟测试 脚本测试 入口文件
const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({// 设置mocha响应时间
  timeout: '10000ms'
});

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  // 删除dist 去执行lib/webpack.prod.js
  const prodConfig = require('../../lib/webpack.prod.js');

  // 执行结果返回给webpack, 会接收一个回调函数, 处理结果
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);// 抛出异常
    }
    console.log(stats.toString({ // 输出成功信息
      colors: true,
      modules: false,
      children: false
    }))

    console.log('Webpack build success, begin run test.');

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();//执行下抹茶的run方法测试
  })

})