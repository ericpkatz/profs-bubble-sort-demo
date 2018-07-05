const expect = require('chai').expect;
const bubbleSort = require('../bubbleSort');
const sinon = require('sinon');

describe('bubbleSort', ()=> {
  it('exists', ()=> {
    expect(bubbleSort).to.be.ok;
  });
  it('sorts', ()=> {
    expect(bubbleSort([2, 1])).to.eql([1, 2]);
  });
  it('sorts with a 0', ()=> {
    expect(bubbleSort([2, 0, 1])).to.eql([0, 1, 2]);
  });
  it('sorts efficiently', ()=> {
    const fn = sinon.spy();

    bubbleSort([0, 1, 2, 3, 4], fn);
    expect(fn.callCount).to.equal(4);
  });
});
