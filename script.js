
const sections = document.querySelectorAll('.section');

const steps = document.querySelectorAll('.step')

const backBtn = document.getElementById('btn-back');

const moveBtn = document.getElementById('btn-move');

let index =0;

moveBtn.addEventListener('click', () => {
    sections[index].classList.remove('active');
    steps[index].style.backgroundColor = "white";
    index++;

    if(index >= steps.length){
        index = steps.length - 1;
    }
    
    sections[index].classList.add('active')
    steps[index].style.backgroundColor = "lightblue";

})

backBtn.addEventListener('click', () => {

    sections[index].classList.remove('active');
    steps[index].style.backgroundColor = "white";
    index--;

    if(index < 0){
        index = 0;
    }

    sections[index].classList.add('active')
    steps[index].style.backgroundColor = "lightblue";

});

// Add languages and competence

const list = document.querySelectorAll('.lists');

const yourInput = document.querySelectorAll('.your-input')

const selectOption = document.querySelectorAll('.niveau');

const addBtns = document.querySelectorAll('.add-btn');

addBtns.forEach((btn, index) =>{
    btn.addEventListener('click' , () =>{
     
    const input = yourInput[index].value;
    const select = selectOption[index].value;
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");
    
    div.classList.add("lang-item");

    p.textContent = input;
    span.textContent = select;

    div.appendChild(p);
    div.appendChild(span);
    list[index].appendChild(div);    

})

});

// add losires 

const listOfloi = document.getElementById('list-loi');
const inputOfloi = document.getElementById('input-loi');
const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click' , () =>{
    const value = inputOfloi.value;
    const div = document.createElement("div");
    const p = document.createElement("p");
    
    div.classList.add("lang-item");

    p.textContent = value;

    div.appendChild(p);
    listOfloi.appendChild(div); 

});



