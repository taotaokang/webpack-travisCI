// 单元测试入口文件

const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));// process.chdir可以切换到目的路径

describe('builder-webpack test case', () => {
  require('./unit/webpack-base-test');
});