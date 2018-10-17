const InstrumentData = require('./data/instrument_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('select');
  const InstrumentFamilyDropdown = new SelectView(selectElement);
  InstrumentFamilyDropdown.bindEvents();

  const InstrumentClasses = new InstrumentFamilies();
  InstrumentClasses.bindEvents();

});
