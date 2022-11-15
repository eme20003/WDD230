const jsonArray = "jsonFiles/data.json";
const cardClass = document.querySelector(".card");
const screenWidth = screen.width
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function getCompanies(){
    const response = await fetch(jsonArray);
    if(response.ok){
        const data = await response.json();
        data.companies.forEach(company => {displayCompany(company)});
    }
}


function displayCompany(company){

            // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `Company Name: ${company.companyName}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

    if(screenWidth >= 1200){
        portrait.setAttribute('src', company.companyLogoLarge);
        portrait.setAttribute('alt', `Logo of ${company.companyName}`);
    }else if(1200 < screenWidth >= 600){
        portrait.setAttribute('src', company.companyLogoMedium);
        portrait.setAttribute('alt', `Logo of ${company.companyName}`);
    }else if(600 < screenWidth >= 300){
        portrait.setAttribute('src', company.companyLogoSmall);
        portrait.setAttribute('alt', `Logo of ${company.companyName}`);
    }else{
        portrait.setAttribute('src', company.companyLogoLarge);
        portrait.setAttribute('alt', `Logo of ${company.companyName}`);
    }
    
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cardClass.appendChild(card);
}

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

getCompanies();

