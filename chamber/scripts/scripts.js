function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

let currentDayOfWeek = date.getDay();

let currentDate = `${currentMonth}/${currentDay}/${currentYear}`;

const displayDate = document.querySelector('p');

displayDate.textContent = 'Date: ' + currentDate;

let newPara = document.createElement('p');
let newDisplayNode = document.createTextNode('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.');

let uList = document.getElementById('actualDate');
newPara.appendChild(newDisplayNode);

let getDay = () =>{
    if(currentDayOfWeek === 1 || currentDayOfWeek === 3){
        uList.appendChild(newPara);
    }else{
        uList;
    }
}

getDay();
