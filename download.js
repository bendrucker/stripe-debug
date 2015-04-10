'use strict';

var get         = require('got');
var resolve     = require('path').resolve;
var writeStream = require('fs').createWriteStream;

var src = 'https://js.stripe.com/v2/stripe-debug.js';
var dest = resolve(__dirname, 'stripe-debug.js');

get(src).pipe(writeStream(dest));
