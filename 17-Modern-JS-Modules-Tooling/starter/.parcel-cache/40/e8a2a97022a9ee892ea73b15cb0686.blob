var _shoppingCartJs = require('./shoppingCart.js');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _shoppingCartJsDefault = _parcelHelpers.interopDefault(_shoppingCartJs);
var _lodash = require('lodash');
var _lodashDefault = _parcelHelpers.interopDefault(_lodash);
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(shippingCost);
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');
_shoppingCartJsDefault.default('pizza', 2);
_shoppingCartJsDefault.default('bread', 5);
_shoppingCartJsDefault.default('apples', 10);
console.log(_shoppingCartJs.cart);
const state = {
  cart: [{
    product: 'bread',
    quantity: 5
  }, {
    product: 'pizza',
    quantity: 5
  }],
  user: {
    loggedIn: true
  }
};
const stateClone = Object.assign({}, state);
const stateDeepClone = _lodashDefault.default(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}
