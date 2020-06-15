
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js')
  // console.log(baseConfig)

  // 匹配当前baseConfig输出的实际目录
  it('entry', () => {
    assert.equal(baseConfig.entry.index, 'G:/mycode/webpack-code/webpack-travisCI/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, 'G:/mycode/webpack-code/webpack-travisCI/test/smoke/template/src/search/index.js');
  });
});