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

    this.setState({
      value: isNaN(value) ? 0 : value
    });
  },
});

