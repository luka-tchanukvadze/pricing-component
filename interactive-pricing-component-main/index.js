function getElementByClass(elementClass){
  return document.querySelector(`.${elementClass}`)

}


const views = getElementByClass('views')
const price = getElementByClass('number')
const range = getElementByClass('myRange')

function income(){
  let myValue = Number(range.value)
  let number = 0
  let inMonth = 0
  
  switch(true){
    case myValue === 1:
      number = 10
      inMonth = 8
      break
    case myValue === 2:
      number = 50
      inMonth = 12
      break
    case myValue === 3:
      number = 100
      inMonth = 16
      break
    case myValue === 4:
      number = 500
      inMonth = 24
      break
    case myValue === 5:
      number = 1
      inMonth = 36
      break
  }

  if(myValue < 5){
    views.textContent = `${number}k pageviews`.toUpperCase()
    price.textContent = `$${inMonth.toFixed(2)}`
  } else if(myValue === 5){
    views.textContent = `${number}m pageviews`.toUpperCase()
    price.textContent = `$${inMonth.toFixed(2)}`
  }

}

range.addEventListener('input', () => {
  income()
})
