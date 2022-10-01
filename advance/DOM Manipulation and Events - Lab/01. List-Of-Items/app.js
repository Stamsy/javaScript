function addItem() {
    //select input field and read its value
   const content =  document.getElementById('newItemText').value;
    //create <li> element
    const liElement = document.createElement('li');
    //assign input value to element text content
    liElement.textContent = content;
    //select <ul> and append new element
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement)
    //select input field and clear contants (value)
    document.getElementById('newItemText').value = '';
}