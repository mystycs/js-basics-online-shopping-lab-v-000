'use strict';

var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart){
  cart = newCart;
}

function addToCart(item){
  let newItemPrice = {};
  newItemPrice[item] = Math.floor(Math.random() * 100);
  cart.push(newItemPrice);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  if(cart.length != 0){
    let c = [];
    for(var i = 0, l = cart.length; i < l; i++){
      for(var item in cart[i]){
        c.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + c.join(", ") + ".");
  }
  else{
    console.log("Your shopping cart is empty");
  }
}

function removeFromCart(item){
  let itemInCart = false;

  for(var i = 0, l=cart.length; i < l; i++){
    for(var iteratedItem in cart[i]){
      if(item == iteratedItem){
        itemInCart = true;
        cart.splice(i, 1);
      }
    }
  }

  if(itemInCart == false){
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(ccNum){
  if(ccNum){
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + ccNum + ".");
    cart = [];
  }
  else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
