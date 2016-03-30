'use strict';

var React = require('react');
var noop = () => {};

module.exports = React.createClass({
  getInitialState() {
    return {
      value: 0,
    };
  },

  insertCoin() {
    var onCoinInserted = this.props.onCoinInserted || noop;
    var value = this.state.value;

    if (isNaN(value)) return;

    onCoinInserted(value);
  },

  render() {
    return (
        <div>
          <input type='text' onChange={this._onChange} />
          <button onClick={this.insertCoin}>投入</button>
        </div>
    );
  },

  _onChange(event) {
    var value = +event.target.value;

    if (isNaN(value)) return;

    this.setState({
      value: value,
    });
  },
});

