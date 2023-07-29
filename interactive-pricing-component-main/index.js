
const views = document.querySelector('.views')
const price = document.querySelector('.number')
const range = document.querySelector('.myRange')
const checkBox = document.querySelector('.check-box')

const prices = [8, 12, 16, 24, 36]
const pageViews = ['10K', '50K', '100K', '500K', '1M']

function updateViewsAndPrice() {
  const index = range.value - 1
  const discountedPrice = prices[index] * 0.75
  const selectedViews = pageViews[index]
  const monthlyPrice = checkBox.checked ? discountedPrice : prices[index]

  views.textContent = `${selectedViews} PAGEVIEWS`
  price.textContent = `$${monthlyPrice.toFixed(2)}`
}

range.addEventListener('input', updateViewsAndPrice)
checkBox.addEventListener('change', updateViewsAndPrice)

updateViewsAndPrice()
