'use strict';

const falseness = () => false;

const trueness = () => true;

const emptiness = () => {};

const nop = callback => {
  callback(null);
};

const noop = (empty, callback) => {
  callback(null, null);
};
