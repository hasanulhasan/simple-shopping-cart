function shoppingCart(element) {
  let products = element.parentNode.children[0].innerText;
  let prices = element.parentNode.children[1].children[0].innerText;
  console.log(products, prices)

}