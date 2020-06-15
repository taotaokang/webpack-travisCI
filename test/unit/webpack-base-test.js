
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js')
  // console.log(baseConfig)

  // 匹配当前baseConfig输出的实际目录
  // 'G:/mycode/webpack-code/webpack-travisCI/test/smoke/template/src/index/index.js'
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('webpack-travisCI/test/smoke/template/src/index/index.js') > -1, true);
    assert.equal(baseConfig.entry.search.indexOf('webpack-travisCI/test/smoke/template/src/search/index.js') > -1, true);
  });
});