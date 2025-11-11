
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

// Add button "Ajouter" for languages and competence

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
    const delBtn = document.createElement('button')
    
    div.classList.add("lang-item");

    p.textContent = input;
    span.textContent = select;
    delBtn.textContent = "Delete";

    delBtn.style.marginLeft="10px";
    delBtn.style.background="transparent";

    div.appendChild(p);
    div.appendChild(span);
    div.appendChild(delBtn);
    list[index].appendChild(div);  
    
    delBtn.addEventListener('click', () => {

        div.remove();
    })

})

});

// add  boutton "Ajouter" for losires 

const listOfloi = document.getElementById('list-loi');
const inputOfloi = document.getElementById('input-loi');
const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click' , () =>{
    const value = inputOfloi.value;
    const div = document.createElement("div");
    const p = document.createElement("p");
    const delBtn = document.createElement('button')
    
    div.classList.add("lang-item");

    p.textContent = value;
    delBtn.textContent = "Delete";

    delBtn.style.marginLeft="10px";
    delBtn.style.background="transparent";
   
    

    div.appendChild(p);
    div.appendChild(delBtn);
    listOfloi.appendChild(div); 

    delBtn.addEventListener('click', () => {

        div.remove();
    })

});

// add boutton "Ajouter" for  Expériences

const listExp = document.getElementById('list-exp');
const inputFon = document.getElementById('input-fonc');
const inputLoc = document.getElementById('input-loca');
const inputDes = document.getElementById('input-des');
const howMuch = document.getElementById('how-much');
const btnExp = document.getElementById('bouton');

  btnExp.addEventListener('click' , () => {
    let valueFon = inputFon.value;
    let valueLoc = inputLoc.value;
    let valueNum = howMuch.value;
    // let valueDes = inputDes.value;

    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    // const p3 = document.createElement('p');
    const span = document.createElement('span');
    const delBtn = document.createElement('button')

    
    div.classList.add("lang-item");
     
    p1.textContent= valueFon;
    p2.textContent= valueLoc;
    // p3.textContent= valueDes;
    span.textContent= valueNum;

    delBtn.textContent = "Delete";
    delBtn.style.marginLeft="10px";
    delBtn.style.background="transparent";

    

     div.appendChild(p1);
     div.appendChild(p2);
    //  div.appendChild(p3);
     div.appendChild(span)
    div.appendChild(delBtn);
     listExp.appendChild(div); 

      delBtn.addEventListener('click', () => {

        div.remove();
    })


     

})





