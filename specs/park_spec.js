const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 7.55, []);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Stegosaurus', 'herbivore' , 30)
    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 40);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 7.55)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.mostVisitors()
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.certainSpecies('t-rex')
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 120)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.totalVisitorsPerYear()
    assert.strictEqual(actual, 43800)
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
  });

});
