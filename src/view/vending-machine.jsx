'use strict';

var React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return {
      amountOfMoney: 0,
    }
  },

  render() {
    return (
        <div>
          投入金額: {this.state.amountOfMoney}円
        </div>
    );
  },
});

