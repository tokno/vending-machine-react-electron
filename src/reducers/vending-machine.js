'use strict';

var initialState = {
  amountOfMoney: 0,
};

module.exports = (state = initialState, action) => {
  console.log('vending-machine action.type:' + action.type);

  switch (action.type) {
    case 'INSERT_MONEY':
      return Object.assign({}, state, {
        amountOfMoney: state.amountOfMoney + action.value,
      });

    default:
      return state;
  }
};

