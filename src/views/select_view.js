const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments-allAvailable', (event)=>{
    const instrumentFamilies = event.detail;
    this.populate(instrumentFamilies);
    debugger;
    console.log(availableInstrumentClasses);
  });
};


SelectView.prototype.populate = function(InstrumentFamilyData){
  InstrumentFamilyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
