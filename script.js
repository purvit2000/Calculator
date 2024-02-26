let opdFlag = 0; //0 indicates that the opd1 is taking value and it goes to 1 the moment any operand is clicked.
let optFlag = '';
let opd1, opd2;

const ans = document.querySelector('#ans');
const opd = document.querySelectorAll('.operand');
const opt = document.querySelectorAll('.operator');
const equalTo = document.querySelector('#bEqualto');
const sign = document.querySelector('#signChange');
const clear = document.querySelector('#bClear');
const percent = document.querySelector('#percent');
const back = document.querySelector('#bBack');
const canculate = (a, b) => {
    if(a === undefined || b === undefined){}

    else if(optFlag === '+'){
        ans.innerHTML = a + b;
    }
    else if(optFlag === '-'){
        ans.innerHTML = a - b;
    }
    else if(optFlag === '*'){
        ans.innerHTML = a * b;
    }
    else if(optFlag === '/'){
        ans.innerHTML = a / b;
    }
    else if(optFlag === '%'){
        ans.innerHTML = a % b;
    }
}

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
    if(opd1 !== undefined){
        
        opd2 = parseFloat(ans.innerHTML);
        canculate(opd1, opd2);

        opd2 = undefined;
        opd1 = undefined;
    }
    

        opdFlag = 1;
        optFlag = event.target.innerHTML;
    

})
});

equalTo.addEventListener('click', () => {
    
    opd2 = parseFloat(ans.innerHTML);
    
    canculate(opd1, opd2);

    opdFlag = 0;
    optFlag = '';
    opd1 = undefined; 
    opd2 = undefined; 

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
    
    ans.innerHTML = '0';
    opdFlag = 0;
    optFlag = '';
    opd2 = undefined
    opd1 = undefined;
    
})

percent.addEventListener('click', () => {
    
    ans.innerHTML = parseFloat(ans.innerHTML)/ 100;
})

back.addEventListener('click', () => {
    if(ans.innerHTML.length === 1){
        ans.innerHTML = 0;
    }
    else{

        ans.innerHTML = ans.innerHTML.slice(0, -1);
    }
   
})

