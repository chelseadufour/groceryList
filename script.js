$(document).ready(function () {



var shoppingList = [
];

var total = 0;
var newItem = '';
var newPrice = '';

shoppingList.forEach(function(item) {
  document.getElementById('prettyList').innerHTML += '<li>' + item.name + '</li>';
  document.getElementById('prettyList2').innerHTML += '<li>' + "$" + item.price +'</li>';
  total += item.price;
});

document.getElementById('totalSpot').innerHTML += ("Total: $" + total);


//ALLOW USER TO ADD ITEM
function createObject(makeNewItem, makeNewPrice) {
	this.name = makeNewItem;
	this.price = makeNewPrice;
	return {name, price};
};
function radFunction() {
	newItem = document.getElementById('foodInput').value;
	newPrice = document.getElementById('priceInput').value;

  //adding a new item
	var ul = document.body.children[3];
	var appChild = document.createElement('li');
	appChild.innerHTML = newItem;
	ul.appendChild(appChild);

  //adding the new item's price
	var ul2 = document.body.children[4];
	var appChild2 = document.createElement('li');
	appChild2.innerHTML = "$" + newPrice;
	ul2.appendChild(appChild2);

total += Number(newPrice);
document.getElementById('totalSpot').innerHTML = ("Total: $" + total);

document.getElementById('foodInput').value = "";
document.getElementById('priceInput').value = "";

};





}); //document function//
