
let firstNumber = []
let secondNumber = []
let operand = []
const btn = document.querySelectorAll('.btn')
const values = document.querySelector('.values')
const operator = document.querySelectorAll('.operator')
const para = document.querySelector('.top')
const equalTo = document.querySelector('.equal')


btn.forEach(function(button) {
   button.addEventListener('click',function(e){
      const numbers = e.currentTarget.classList
      if(numbers.contains('seven')){
         values.placeholder = 0
         values.value += 7
      }else if(numbers.contains('eight')){
         values.placeholder = 0
         values.value += 8
      }else if(numbers.contains('nine')){
         values.placeholder = 0
         values.value += 9
      }else if(numbers.contains('four')){
         values.placeholder = 0
         values.value += 4
      }else if(numbers.contains('five')){
         values.placeholder = 0
         values.value += 5
      }else if(numbers.contains('six')){
         values.placeholder = 0
         values.value += 6
      }else if(numbers.contains('one')){
         values.placeholder = 0
         values.value += 1
      }else if(numbers.contains('two')){
         values.placeholder = 0
         values.value += 2
      }else if(numbers.contains('three')){
         values.placeholder = 0
         values.value += 3
      }else if(numbers.contains('dot')){
         values.placeholder = 0
         values.value += '.'
      }else if(numbers.contains('zero')){
         values.placeholder = 0
         values.value += 0
      }else if(numbers.contains('clear')){
         values.placeholder = 0
         values.value = ''
      }else if(numbers.contains('ac')){
         values.value = ''
         operand.pop()
         firstNumber.pop()
         secondNumber.pop()
         values.placeholder = 0
         para.textContent = 0

      }
})
})

operator.forEach(function(btn){
   btn.addEventListener('click',function(e){
      op = e.currentTarget.classList
      if (op.contains('plus')){
         if (firstNumber.length === 0 && operand.length === 0){
            firstNumber.push(values.value)
            operand.push('+')
            para.textContent = values.value + " +" 
            values.value = ''
         }    
      }else if(op.contains('minus')){
         if (firstNumber.length === 0){
            firstNumber.push(values.value)
            operand.push('-')
            para.textContent = values.value + " -" 
            values.value = ''
         }
      }else if(op.contains('division')){
         if (firstNumber.length === 0){
            firstNumber.push(values.value)
            operand.push('/')
            para.textContent = values.value + " /" 
            values.value = ''
         }
      }else if (op.contains('multiply')){
         if (firstNumber.length === 0){
            firstNumber.push(values.value)
            operand.push('*')
            para.textContent = values.value + " *" 
            values.value = ''
         }
      }
      
   })
})

equalTo.addEventListener('click', function(){
   let total
   if(operand.includes('+')){
      secondNumber.push(values.value)
      total = parseFloat(firstNumber) + parseFloat(secondNumber)
      para.innerHTML = `<p>${firstNumber} + ${secondNumber}</p>`
      popMe(total)
   }else if(operand.includes('-')){
      secondNumber.push(values.value)
      total = firstNumber - secondNumber
      para.innerHTML = `<p>${firstNumber} + ${secondNumber}</p>`
      popMe(total)
   }else if(operand.includes('/')){
      secondNumber.push(values.value)
      total = firstNumber / secondNumber
      para.innerHTML = `<p>${firstNumber} + ${secondNumber}</p>`
      popMe(total)
   }else if(operand.includes('*')){
      secondNumber.push(values.value)
      total = firstNumber * secondNumber
      para.innerHTML = `<p>${firstNumber} * ${secondNumber}</p>`
      popMe(total)
   }
   
   // console.log(para.textContent = firstNumber);
})


function popMe(total){
   values.value = ''
   operand.pop()
   firstNumber.pop()
   secondNumber.pop()
   values.placeholder = total
}

console.log(firstNumber);
console.log(secondNumber);
console.log(operand);


