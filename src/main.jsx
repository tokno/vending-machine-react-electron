'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');

var VendingVachine = require('./view/vending-machine');
var CoinSlot = require('./view/coin-slot');

var vendingMachineReducer = require('./reducers/vending-machine');
var vendingMachineStore = Redux.createStore(vendingMachineReducer);

function onCoinInserted(value) {
  console.log(value + "円投入");

  vendingMachineStore.dispatch({
    type: 'INSERT_MONEY',
    value: value,
  });
}

function render() {
  ReactDOM.render(
      <CoinSlot onCoinInserted={onCoinInserted} />,
      document.querySelector('#coin-slot'));

  ReactDOM.render(
      <VendingVachine vendingMachine={vendingMachineStore.getState()} />,
      document.querySelector('#vending-machine'));
}

render();

vendingMachineStore.subscribe(render);

