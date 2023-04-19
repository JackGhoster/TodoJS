let container = document.getElementById('container');

let inputField = document.getElementById('input');

let createButton = document.getElementById('create-button');
let checkboxs = [];

createButton.onclick = function () {
    addItem(inputField.value);
}



function addItem(text) {
    if (text === '') return;
    let itemContainer = document.createElement('div');
    itemContainer.className = 'item-container';
    container.appendChild(itemContainer);
    
    let itemCheckBox= document.createElement("input");
    itemCheckBox.type = "checkbox";
    itemCheckBox.className = "item-checkbox";
    itemCheckBox.addEventListener('change', checkCheckboxes);
    checkboxs.push(itemCheckBox);
    itemContainer.appendChild(itemCheckBox);

    let itemText = document.createElement('p');
    itemText.innerText = text;
    itemText.className = 'item-text';
    itemContainer.appendChild(itemText);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', deleteItem);
    itemContainer.appendChild(deleteButton);   
}

function checkCheckboxes(){
    let x = [];
    for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) {
            checkboxs[i].parentNode.style.backgroundColor ='#8fbd77';
            checkboxs[i].parentNode.firstElementChild.nextSibling.style.textDecoration = 'line-through';
            
        }
        else{
            checkboxs[i].parentNode.style.backgroundColor =  '#ffcc96';
            checkboxs[i].parentNode.firstElementChild.nextSibling.style.textDecoration = 'none'; 
        }
    }
}

function deleteItem(event) {
    event.target.parentNode.remove();
    checkboxs.splice(checkboxs.indexOf(event.target.parentNode), 1);
}
