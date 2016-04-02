var expect = require('expect');
var vendingMachineReducer = require('../src/reducers/vending-machine');
console.log(expect);

describe('VendingMachine reducers', () => {
  it('初期状態', () => {
    expect(
      vendingMachineReducer(undefined, {})
    ).toEqual({
      amountOfMoney: 0,
    });
  });

  describe('お金の投入', () => {
    it('10円入れる', () => {
      expect(
        vendingMachineReducer(undefined, {
          type: 'INSERT_MONEY',
          value: 10,
        })
      ).toEqual({
        amountOfMoney: 10,
      });
    });
  });
});

