// let cnum = "0"
// let arrCalculation = []


// const cnumtext = document.querySelector('.cnum')
// const zero = document.querySelector('.zero')
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')
// const clear = document.querySelector('.clear')
// const calculation = document.querySelector('.calculation')
// const resultB = document.querySelector('.resultB')
// const result = document.querySelector('.result')
// const add = document.querySelector('.add')
// const sub = document.querySelector('.minus')

// const calcu = {
//     "add" : (x,y) => +x + +y,
//     "-" : (x,y) => +x - +y
// }

// zero.addEventListener('click', addzero)
// one.addEventListener('click', addone )
// two.addEventListener('click', addtwo )
// clear.addEventListener('click',clearNum)
// add.addEventListener('click', operatoradd)
// add.addEventListener('click', operatorsub)
// resultB.addEventListener('click', giveResult)



// function clearNum(){
//     cnumtext.textContent = "0"
//     cnum = "0"
//     console.log(cnum)
// }

// function addzero(){
//     if(!(+cnum == 0)){
//         cnumtext.textContent += "0"
//         cnum += "0"
//         console.log(cnum)
//     }
// }

// function addone(){
//     if(+cnum == 0){
//         cnumtext.textContent = "1"
//         cnum = "1"
//     }else{
//         cnumtext.textContent += "1"
//         cnum += "1"
//         console.log(cnum)
//     }
// }

// function addtwo(){
//     if(+cnum == 0){
//         cnumtext.textContent = "2"
//         cnum = "2"
//     }else{
//         cnumtext.textContent += "2"
//         cnum += "2"
//         console.log(cnum)
//     }
// }

// function operatoradd(){
//     arrCalculation.push(cnum)
//     arrCalculation.push("+")
//     calculation.textContent += `${cnum} +`
//     cnum = "0"
//     cnumtext.textContent = "0"
// }

// function giveResult(){
//     for(let i = 1; i < arrCalculation.length ; i+=2){
//         if (arrCalculation[i] == "+"){
//             let newResult = calcu.add(arrCalculation[i-1],arrCalculation[i+1])
//             arrCalculation.splice(i-1,3,newResult)
//             result.textContent = arrCalculation[0] 
//         }
//     }
// }
