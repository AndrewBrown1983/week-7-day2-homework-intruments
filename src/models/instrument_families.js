const PubSub = require('../helpers/pub_sub.js');
const data = require('../data/instrument_data.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('Instruments:allAvailable', this.data);
console.log(data);
};

module.exports = InstrumentFamilies;
