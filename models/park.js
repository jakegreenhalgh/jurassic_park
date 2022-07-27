const Dinosaur = require("./dinosaur");

const Park = function (name, ticket_price, collection) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection = collection;
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.collection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collection.indexOf(dinosaur);
    this.collection.splice(indexOfDinosaur, 1);
  }

Park.prototype.mostVisitors = function () {
    let top_dino = new Dinosaur('', '', 0);
    for (let dino of this.collection) {
        if (dino.guestsAttractedPerDay > top_dino.guestsAttractedPerDay) {
            top_dino = dino
        }
    }
    return top_dino
}

Park.prototype.certainSpecies = function (species) {
    let all_of_species = [];
    for (let dino of this.collection) {
        if (dino.species === species) {
            all_of_species.push(dino)
        }
    }
    return all_of_species
}

Park.prototype.totalVisitorsPerDay = function () {
    let sum = 0
    for (let dino of this.collection) {
        sum += dino.guestsAttractedPerDay
    }
    return sum
}

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365
}

Park.prototype.totalRevenue = function () {
    return this.totalVisitorsPerYear() * 7.55
}

module.exports = Park