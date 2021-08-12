// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(shippingCost);
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq }  from "./shoppingCart.js"
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 10);

console.log(cart);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${product} ${quantity} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} ordered from supplier`);
  };

  return {
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
  };
})();

ShoppingCart2.addToCart('apples', 5);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

/*
// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${product} ${quantity} added to cart (shipping cost is ${shippingCost})`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js')
*/

////////////////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash';
import { thistle } from 'color-name';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    { product: 'pizza', quantity: 2 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
console.log(state.cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async function
import 'regenerator-runtime/runtime';
