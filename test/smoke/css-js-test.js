
const glob = require('glob-all');

describe('Checking generated html files', () => {
  it('should generate html files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.js',
      './dist/search_*.css',
    ]);

    if (files.length > 0) {// 如果读取到了css js文件 执行下done函数
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});