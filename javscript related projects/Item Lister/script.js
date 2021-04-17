var addbtn = document.getElementById('add-btn');
var form = document.getElementById('form');
var item_list = document.getElementById('items-list');
var searchBox = document.getElementById(`filter`);



form.addEventListener('submit', addItem);
item_list.addEventListener('click', removeItem);
searchBox.addEventListener('keyup', filterItems);

function addItem(event) {
    // prevent from submitting
    event.preventDefault();
    // getting the input value 
    var inputText = document.getElementById('item-text').value;
    //creating the element delete button
    var button = document.createElement('a');
    //giving classes to the delete button
    button.className = 'delete btn';
    // adding text to the button
    button.innerText = 'x';
    // creating li element
    var li = document.createElement(`li`);
    // giving class to the li element
    li.className = `items`;
    // append the text in the item
    li.innerText = inputText;
    // appending delete button in the li 
    li.appendChild(button)
        // appending the created element in the list
    item_list.appendChild(li);
}

function removeItem(event) {
    if (event.target.classList.contains(`delete`)) {
        if (confirm(`Are you sure ? `)) {
            let li = event.target.parentElement;
            item_list.removeChild(li);
        }
    }
}

function filterItems(event) {
    // getting text that is typed
    let text = event.target.value.toLowerCase();
    // getting items
    let list = item_list.getElementsByTagName(`li`);
    // converting the list into array
    Array.from(list).forEach(item => {
        let itemName = item.firstChild.textContent;
        console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = `flex`;
        } else {
            item.style.display = 'none';
        }
    });
}