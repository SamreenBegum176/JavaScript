var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit Event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//form submit event 
form.addEventListener('submit', addItem);

//add Item
function addItem(e){
    e.preventDefault();

    //Get input value from 1st text Box
    var newItem = document.getElementById('item').value;

    //Get input value from 2nd text Box
    var newItem1 = document.getElementById('item1').value;

    //Create new Li Element
    var li =document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem1));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //Append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//Remove Item Function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items
function filterItems(e){
    //conert text into LowerCase
    var text=e.target.value.toLowerCase();
    //Get li's
    var items = itemList.getElementsByTagName('li');
    //Convert To Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'black';
        }
        else{
            item.style.display = 'none';
        }
    });
}