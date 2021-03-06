import {assert, expect} from 'chai';
import {Random} from '../src/random';
var rnd = new Random();

describe('Random', function() {

  describe('#rnd()',function(){
    it('should be instance of Random', function() {
      expect(rnd).to.be.instanceOf(Random);
    });
    it('should respond to int, real, pick, chance, color, unique, uniq', function() {
      expect(rnd).itself.to.respondTo('int');
      expect(rnd).itself.to.respondTo('real');
      expect(rnd).itself.to.respondTo('pick');
      expect(rnd).itself.to.respondTo('chance');
      expect(rnd).itself.to.respondTo('color');
      expect(rnd).itself.to.respondTo('unique');
      expect(rnd).itself.to.respondTo('uniq');
    });

  });

  describe('#int()',function(){
    it('should return 0 or 1 if no args are given', function() {
      expect(rnd.int()).to.be.above(-1).and.below(2);
    });

    it('should return a number between 1, 4', function() {
      expect(rnd.int(1,4)).to.be.above(0).and.below(5);
    });

    it('should return a number between -1, 1', function() {
      expect(rnd.int(-1,1)).to.be.above(-2).and.below(2);
    });
  });


  describe('#real()',function(){
    it('should return 0.0 or 1.0 if no args are given', function() {
      expect(rnd.real()).to.be.above(-0.1).and.below(1.1);
    });

    it('should return a number between 1.0, 4.0', function() {
      expect(rnd.real(1.0,4.0)).to.be.above(0.99).and.below(4.1);
    });

    it('should return a number between -1.0, 1.0', function() {
      expect(rnd.real(-1.0,1.0)).to.be.above(-1.1).and.below(1.1);
    });
  });

  describe('#pick()',function(){
    var theArray = [1,2,3,4];
    it('should return a 1,2,3 or 4 from [1,2,3,4]', function() {
      expect(rnd.pick(theArray)).to.be.above(0).and.below(5);
      expect(rnd.pick(theArray)).to.be.above(0).and.below(5);
      expect(rnd.pick(theArray)).to.be.above(0).and.below(5);
      expect(rnd.pick(theArray)).to.be.above(0).and.below(5);
    });
  });

  describe('#chance()',function(){
    it('should return true', function() {
      expect(rnd.chance(100)).to.be.equal(true);
    });
    it('should return false', function() {
      expect(rnd.chance(0)).to.be.equal(false);
    });
  });

  describe('#color()',function(){
    it('should return rgb color string', function() {
      expect(rnd.color()).to.match(/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/);
      expect(rnd.color('rgb')).to.match(/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/);
    });
    it('should return rgba color string', function() {
      expect(rnd.color('rgba')).to.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(0\.\d+))?\)$/);
    });
    it('should return hsl color string', function() {
      expect(rnd.color('hsl')).to.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g);
    });
    it('should return hsla color string', function() {
      expect(rnd.color('hsla')).to.match(/^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/);
    });
    it('should return hex color string', function() {
      expect(rnd.color('hex')).to.match(/^#[0-9a-f]{3,6}$/i);
    });
  });

  describe('#unique()',function(){
    it('should return false', function() {
      expect(rnd.unique([1,2],3)).to.equal(false);
    });
    it('should = 1', function() {
      expect(rnd.unique([1],1)[0]).to.equal(1);
    });
    it('should = 1', function() {
      expect(rnd.unique([1,2,3],3).sort()[0]).to.equal(1);
    });
    it('should = 2', function() {
      expect(rnd.unique([1,2,3],3).sort()[1]).to.equal(2);
    });
    it('should = 3', function() {
      expect(rnd.unique([1,2,3],3).sort()[2]).to.equal(3);
    });
    it('should have a length of 5', function() {
      expect(rnd.unique([1,2,3,4,5,6,7,8,9,10],5).length).to.equal(5);
    });
    it('should = "apple"', function() {
      expect(rnd.unique(['grape','banana','cherry','apple'],4).sort()[0]).to.equal('apple');
    });
  });

});
