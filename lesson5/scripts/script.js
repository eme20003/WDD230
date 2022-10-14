const userList = document.querySelector('ul');
const userInput = document.querySelector('input');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', () => {

  let newInput = userInput.value; 
  userInput.value = '';
  
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const newButton = document.createElement('button');
  
  listItem.appendChild(span);
  span.textContent = newInput;
  
  listItem.appendChild(newButton);
  newButton.textContent = '❌';

  userList.appendChild(listItem);
  
    newButton.addEventListener('click', () => {
    userList.removeChild(listItem);
  });
  
  userInput.focus();
});