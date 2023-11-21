

//console.dir(document); //it will show the different properties which are attached to document
//Examine THE DOCUMENT OBJECT
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title); // Item Lister

/* document.title = "samreen"; we can the title by using Js
console.log(document.title); O/P samreen
*/

/*console.log(document.doctype); //<!DOCTYPE html>
console.log(document.head);
console.log(document.body);
console.log(document.all); // Gives Array or html collection of everthing that in dom

//document.all[10].textContent = 'Hello';

console.log(document.froms);
console.log(document.links);*/

/* Selectors*/
//console.log(document.getElementById('header-title'));
//var headertitle = document.getElementById('header-title');
//console.log(headertitle);
//headertitle.textContent = 'Helllo';
//headertitle.innerText = 'samreen';
//headertitle.innerHTML = '<h3>Hello</h3>';
//headertitle.style.borderBottom = '3px solid black';

//Get Element By Class Name
/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello2';
items[1].style.fontweight ='bold';
items[1].style.backgroundColor ='blue';

//items.style.backgroundColor = 'yellow';//It does not work beacuse it is collection of items
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor = 'yellow';
}*/



//GET ELEMENT BY TAGNAME//
/*var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].style.backgroundColor = 'pink';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = 'blue';
}
 li[1].style.textAlign = 'right';*/


 //QUERY SELECTOR// Important One

/*var header=document.querySelector('#main-header');// you can select any css Selector
header.style.border = '5px solid black';

var input=document.querySelector('input');
input.value="Hello World";

var submit=document.querySelector('input[type="submit"]');
submit.value='Samreen';

var item = document.querySelector('#items');
item.style.color = 'red';

//Last Child
var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.backgroundColor = 'blue';

//Nth Child
var secItem = document.querySelector('.list-group-item:nth-child(2)');
secItem.style.backgroundColor = 'yellow';*/

//QUERY SELECTOR  ALL//
/*var tittles = document.querySelectorAll('.title');
console.log(tittles);

tittles[0].textContent = 'Sam';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'pink';
    even[i].style.backgroundColor = 'grey';
}*/

//Part1
// TRAVERSING THE DOM//
//var items = document.querySelector('#items');
//ParentNode Property
/*console.log(items.parentNode);
items.parentNode.style.backgroundColor = 'pink';
console.log(items.parentNode.parentNode);*/

//ParentELement
/*console.log(items.parentElement);
items.parentElement.style.backgroundColor = '#f4f4f4';
console.log(items.parentElement.parentElement);  */

//CHILD NODES //

//console.log(items.childNodes);

/*console.log(items.children);
console.log(items.children[1]);
items.children[1].style.backgroundColor = 'grey';

//First Child
console.log(items.firstChild);
//First Element Child
console.log(items.firstElementChild);
items.firstElementChild.textContent = 'HII';
console.log(items.lastElementChild);
items.lastElementChild.textContent = 'Hello';  */

//SIBLLINGS//
//console.log(items.nextSibling);

//Next element sibling//
//console.log(items.nextElementSibling);222

//PREVIOUS SIBLING//
/*console.log(items.previousSibling);
console.log(items.previousElementSibling);
items.previousElementSibling.style.backgroundColor = 'grey';  */

//Create div
/*var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//Add Attribute
newDiv.setAttribute('title', 'Hello Div');

//Add Content
var newDivText =document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

newDiv.style.fontSize = '30px';


console.log(newDiv);

container.insertBefore(newDiv, h1);*/


