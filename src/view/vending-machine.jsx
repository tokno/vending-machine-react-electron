'use strict';

var React = require('react');

module.exports = React.createClass({
  render() {
    var vendingachine = this.props.vendingMachine;

    return (
        <div>
          投入金額: {vendingachine.amountOfMoney}円
        </div>
    );
  },
});

