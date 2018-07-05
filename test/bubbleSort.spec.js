const expect = require('chai').expect;
const bubbleSort = require('../bubbleSort');

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
    let counter = 0; 
    const fn = ()=> {
      counter++;
    };

    bubbleSort([0, 1, 2, 3, 4], fn);
    expect(counter).to.equal(4);
  });
});
