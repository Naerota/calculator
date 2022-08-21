let currentNumber = 0;
let calculation; 

const btns = document.querySelectorAll('.btn')
const result = document.querySelector('.result')
const operation = document.querySelector('.operation')

// give every button listener
Array.from(btns).forEach(btn => giveListener(btn));
function giveListener(btn){
    if(!btn.classList.contains('btn-operator')){
        btn.addEventListener('click', e => selectNum(e))
    }else{
        btn.addEventListener('click', e => selectOperator(e))
    }
}

// add number to operation
function selectNum(e){
    if(result.textContent == '0' && e.target.textContent != '.' ){
        result.textContent = e.target.textContent
    }else{
        result.textContent += e.target.textContent
    }
}

// add operator to number and change result
function selectOperator(e){
    if(e.target.textContent == 'CE' || e.target.textContent == 'C'){
        calculation = undefined;
        operation.textContent = ''
        result.textContent = ''

    } else if(e.target.textContent == '=' ){
        if(result.textContent != ''){
            operation.textContent += `${result.textContent} =`
            result.textContent = `result ${operation.textContent}` // harus diganti
            calculation = operation.textContent.split('')
        }
    } else{
        operation.textContent += `${result.textContent} ${e.target.textContent}`
        result.textContent =''

    }
}



