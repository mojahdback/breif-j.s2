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
    steps[index].style.backgroundColor = "green";

})

backBtn.addEventListener('click', () => {

    sections[index].classList.remove('active');
    steps[index].style.backgroundColor = "white";
    index--;

    if(index < 0){
        index = 0;
    }

    sections[index].classList.add('active')
    steps[index].style.backgroundColor = "green";

    


})