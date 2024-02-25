let opdFlag = 0; //0 indicates that the operand is taking value and it goes to 1 the moment any operand is clicked.
let optFlag = '';
let opd1, opd2;

const ans = document.querySelector('#ans');
const opd = document.querySelectorAll('.operand');
const opt = document.querySelectorAll('.operator');
const equalTo = document.querySelector('#bEqualto');
const sign = document.querySelector('#signChange');
const clear = document.querySelector('#bClear');
const percent = document.querySelector('#percent');

opd.forEach(element => {
    element.addEventListener('click', (event) => {

    if(event.target.innerHTML === '.' && ans.innerHTML.includes('.')){
        
    }

    else if(opdFlag === 1){
        opdFlag = 0;
        opd1 = parseFloat(ans.innerHTML);
        ans.innerHTML = event.target.innerHTML;
    }

    else if(ans.innerHTML == 0){
       
        ans.innerHTML = event.target.innerHTML;
    }
    else if(ans.innerHTML.length < 15){

        ans.innerHTML += event.target.innerHTML;
    }
})
});

opt.forEach(element => {
    element.addEventListener('click', (event) => {

    opdFlag = 1;
    optFlag = event.target.innerHTML;

})
});

equalTo.addEventListener('click', () => {
    
    opd2 = parseFloat(ans.innerHTML);
    if(optFlag === '+'){
        ans.innerHTML = opd1 + opd2;
    }
    else if(optFlag === '-'){
        ans.innerHTML = opd1 - opd2;
    }
    else if(optFlag === '*'){
        ans.innerHTML = opd1 * opd2;
    }
    else if(optFlag === '/'){
        ans.innerHTML = opd1 / opd2;
    }
    else if(optFlag === '%'){
        ans.innerHTML = opd1 % opd2;
    }

})

sign.addEventListener('click', () => {
    let screen = parseFloat(ans.innerHTML);
    if(screen > 0){
        ans.innerHTML = '-' + ans.innerHTML;
    }
    else{
        ans.innerHTML = ans.innerHTML.slice(1);
    }
    

})

clear.addEventListener('click', () => {
    
    ans.innerHTML = '';
    opdFlag = 0;
    optFlag = '';
    opd1, opd2 = 0,0;
})

percent.addEventListener('click', () => {
    
    ans.innerHTML = parseFloat(ans.innerHTML)/ 100;
})

