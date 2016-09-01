// var shoppingList;

//Creating list of objects
// var groceryItem1 = {
// 	name: 'Bread',
// 	price: 2.00
// };
//
// var groceryItem2 = {
// 	name: 'Milk',
// 	price: 3.50
// };
//
// var groceryItem3 = {
// 	name: 'Tofu',
// 	price: 4.00
// };
//
// var groceryItem4 = {
// 	name: 'Fruit',
// 	price: 3.00
// };
//adding another item
// var groceryItem5 = {
//   name: 'Cookies',
//   price: 3.75
// };

//Turning list of objects into an array
// var shoppingList = [groceryItem1, groceryItem2, groceryItem3, groceryItem4];

//Declare variable to collect total, initialize to 0 otherwise it's undefined
// var total = 0;


//pushing 5th grocery item onto existing list
// shoppingList.push(groceryItem5);

//changing 'milk' to 'almond milk'
// shoppingList[1] = {
//   name: 'Almond milk',
//   price: 3.99
// };



//forEach Method
// shoppingList.forEach(function(item) {
//   console.log(item.name + ": $" + item.price.toFixed(2));
//   total += item.price;
// });

//use toFixed(number of decimal points) to round total to a reasonable number
// console.log("Your total is: $" + total.toFixed(2));


// function(addToList) {
// 	alert("hi");
// };
// addToList();

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
	var ul = document.body.children[3];
	var appChild = document.createElement('li');
	appChild.innerHTML = newItem;
	ul.appendChild(appChild);

	var ul2 = document.body.children[4];
	var appChild2 = document.createElement('li');
	appChild2.innerHTML = "$" + newPrice;
	ul2.appendChild(appChild2);

total += Number(newPrice);
document.getElementById('totalSpot').innerHTML = ("Total: $" + total);

document.getElementById('foodInput').value = "";
document.getElementById('priceInput').value = "";

};
