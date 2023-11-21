var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit Event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem);

//form submit event 
form.addEventListener('submit', addItem);

//add Item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new Li Element
    var li =document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

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