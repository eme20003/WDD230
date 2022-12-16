const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const mainInfo = document.querySelector('main');
const ingredient1 = document.querySelector('#ingredient1');
const ingredient2 = document.querySelector('#ingredient2');
const ingredient3 = document.querySelector('#ingredient3');
const submitted = document.querySelector('#submitButton');
const orderFormHeader = document.querySelector('.orderNow');
const orderForm = document.querySelector('.form');
const newDiv = document.querySelector('.reciept');


async function getProduce(){
    const response = await fetch(requestURL);
    if(response.ok) {
    const data = await response.json();
    data.forEach(produce => showProduce(produce));
    }
}

function showProduce(produce){

    let ingredientOne = document.createElement('option');
    let ingredientTwo = document.createElement('option');
    let ingredientThree = document.createElement('option');

    ingredientOne.textContent = `${produce.name}`;
    ingredientTwo.textContent = `${produce.name}`;
    ingredientThree.textContent = `${produce.name}`;

    ingredient1.appendChild(ingredientOne);
    ingredient2.appendChild(ingredientTwo);
    ingredient3.appendChild(ingredientThree);
}

getProduce();

//Put up a reciept when submitting a recepie:
submitted.addEventListener('click', () =>{
        const firstName = document.querySelector('#firstName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const ingredient1 = document.querySelector('#ingredient1').value;
        const ingredient2 = document.querySelector('#ingredient2').value;
        const ingredient3 = document.querySelector('#ingredient3').value;
        const specialInstructions = document.querySelector('#specialInstructions').value;


        let header = document.createElement('h2');
        let checkFirstName = document.createElement('p');
        let checkName = document.createElement('p');
        let checkEmail = document.createElement('p');
        let checkPhone = document.createElement('p');
        let checkIngredient1 = document.createElement('p');
        let checkIngredient2 = document.createElement('p');
        let checkIngredient3 = document.createElement('p');
        let checkInstructions = document.createElement('p');
        let correctButton = document.createElement('button');

        header.textContent = 'We Recieved Your Order!'
        checkName.textContent = `Name: ${firstName}`;
        checkPhone.textContent = `Phone: ${phone}`;
        checkEmail.textContent = `Email: ${email}`;
        checkIngredient1.textContent = `First Ingredient: ${ingredient1}`;
        checkIngredient2.textContent = `Second Ingredient ${ingredient1}`;
        checkIngredient3.textContent = `Third Ingredient ${ingredient1}`;
        checkInstructions.textContent = `Special Instructions ${specialInstructions}`;
        correctButton.textContent = "Go Back";

        newDiv.appendChild(header);
        newDiv.appendChild(checkName);
        newDiv.appendChild(checkEmail);
        newDiv.appendChild(checkPhone);
        newDiv.appendChild(checkIngredient1);
        newDiv.appendChild(checkIngredient2);
        newDiv.appendChild(checkIngredient3);
        newDiv.appendChild(checkInstructions);
        newDiv.appendChild(correctButton);

    correctButton.addEventListener('click', () => {
        window.location.reload();
        });
});

