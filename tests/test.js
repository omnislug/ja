var omnislug = require('../index.js'),
  expect = require('chai').expect;

describe('Japanese (jp)', function() {
  it('One', function(done) {
    expect(omnislug.toSlug('からかい上手の高木さん')).to.be.equal('karakai-joozu-no-takagi-san');
    expect(omnislug.toSlug('まっすぐ自分の言葉は曲げない')).to.be.equal('massugu-jibun-no-kotoba-wa-mage-nai');
    expect(omnislug.toSlug('川の流れのように')).to.be.equal('kawa-no-nagare-no-yoo-ni');
    done();
  });
});
