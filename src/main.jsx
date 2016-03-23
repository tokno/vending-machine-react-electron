'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var VendingVachine = require('./view/vending-machine');

ReactDOM.render(
    <VendingVachine />,
    document.querySelector('#vending-machine'));

