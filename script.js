
const sections = document.querySelectorAll('.section');
const steps = document.querySelectorAll('.step')
const backBtn = document.getElementById('btn-back');
const moveBtn = document.getElementById('btn-move');
const etapes = document.querySelectorAll('.etape');
const prices = document.querySelectorAll('.price');
const lines = document.querySelectorAll('.line');


let index =0;

moveBtn.addEventListener('click', (e) => {
    
     e.preventDefault(); 
     if (validateForm()) { 
    sections[index].classList.remove('active');
    etapes[index].classList.remove('active');
    prices[index].classList.remove('active');
    lines[index].classList.remove('active');
    steps[index].style.backgroundColor = "white";
    index++;

    if(index >= steps.length){
        index = steps.length - 1;
    }
    
    sections[index].classList.add('active');
    lines[index].classList.add('active');
    etapes[index].classList.add('active');
    prices[index].classList.add('active');
    steps[index].style.backgroundColor = "lightblue";
     } 

     else {

      alert('Veuillez corriger les erreurs ');

     }

})

backBtn.addEventListener('click', () => {

    sections[index].classList.remove('active');
    etapes[index].classList.remove('active');
    lines[index].classList.remove('active');
    prices[index].classList.remove('active');
    steps[index].style.backgroundColor = "white";
    index--;

    if(index < 0){
        index = 0;
    }

    sections[index].classList.add('active');
    lines[index].classList.add('active');
    etapes[index].classList.add('active');
    prices[index].classList.add('active');
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
    delBtn.textContent = "delete";

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
    delBtn.textContent = "delete";

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

    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const span = document.createElement('span');
    const delBtn = document.createElement('button')

    div.classList.add("lang-item");
    p1.textContent= valueFon;
    p2.textContent= valueLoc;
    span.textContent= valueNum;

    delBtn.textContent = "delete";
    delBtn.style.marginLeft="10px";
    delBtn.style.background="transparent";

     div.appendChild(p1);
     div.appendChild(p2);
     div.appendChild(span)
     div.appendChild(delBtn);
     listExp.appendChild(div); 

      delBtn.addEventListener('click', () => {

        div.remove();
    });

});

// for validation la section information prancipal 

// Sélection des champs
const dataInput = document.querySelector('.input-name');
const telInput = document.querySelector('.input-tel');
const gitInput = document.querySelector('.input-git');
const emailInput = document.querySelector('.input-email');
const adrInput = document.getElementById('input-adress');
const linkInput = document.querySelector('.input-link');

// Sélection des messages
const msgName = document.getElementById('msg-name');
const msgTel = document.getElementById('msg-tel');
const msgGit = document.getElementById('msg-git');
const msgEmail = document.getElementById('msg-email');
const msgAdr = document.getElementById('msg-adr');
const msgLink = document.getElementById('msg-link');


function validateForm() {
  let isValid = true;

  // --- Nom & prénom ---
  if (dataInput.value.trim().length < 3 ) {
     msgName.textContent = "Veuillez entrer un nom complet (≥ 3 caractères)";
     msgName.style.color = "red";
    isValid = false;
  } else {
    msgName.textContent = "vailed";
    msgName.style.color = "green";
  }

  // --- Téléphone ---
  const telRegex = /^[0-9]{10}$/;
  if (!telRegex.test(telInput.value.trim())) {
    msgTel.textContent = "Numéro invalide (10 chiffres)";
    msgTel.style.color = "red";
    isValid = false;
  } else {

    msgTel.textContent = "vailed";
    msgTel.style.color = "green";

  }

  // --- GitHub ---
  const gitRegex = /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/;
  if (!gitRegex.test(gitInput.value.trim())) {
    msgGit.textContent = "Lien GitHub invalide";
    msgGit.style.color = "red";
    isValid = false;
  } else {
    msgGit.textContent = "vailed";
    msgGit.style.color = "green";
  }

  // --- Email ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    msgEmail.textContent = "Email invalide";
    msgEmail.style.color = "red";
    isValid = false;
  } else {
    msgEmail.textContent = "vailed";
    msgEmail.style.color = "green";
  }

  // Adresse ---
  // if (adrInput.value.trim().length < 5) {
  //   msgAdr.textContent = "Adresse trop courte";
  //   msgAdr.style.color = "red";
  //   isValid = false;
  // } else {
  //   msgAdr.textContent = "vailed";
  //   msgAdr.style.color = "green";
  // }

  // --- LinkedIn ---
  const linkRegex = /^https?:\/\/(www\.)?linkedin\.com\/.*$/;
  if (!linkRegex.test(linkInput.value.trim())) {
    msgLink.textContent = "Lien LinkedIn invalide";
    msgLink.style.color = "red";
    isValid = false;
  } else {
    msgLink.textContent = "vailed";
    msgLink.style.color = "green";
  }

  return isValid;
}

 







