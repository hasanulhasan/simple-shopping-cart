const productInfo = [];

function showProduct(cart) {
  const productRow = document.getElementById('product-row');
  productRow.innerHTML = ``;
  let totalPrice = 0;

  for (i = 0; i < cart.length; i++) {
    const name = cart[i].productName;
    const price = cart[i].productPrice;
    const tr = document.createElement('tr');
    totalPrice = totalPrice + price;
    tr.innerHTML = `
            <th>${i + 1}</th>
            <th>${name}</th>
            <th>${price}</th>
    `
    productRow.appendChild(tr);

  }
  const tr = document.createElement('tr');
  tr.innerHTML = `
            <th colspan="2">${cart.length} Items price Total</th>
            <th>${totalPrice}</th>
  `
  productRow.appendChild(tr);
  console.log(totalPrice);
}

function shoppingCart(element) {
  let products = element.parentNode.children[0].innerText;
  let prices = element.parentNode.children[1].children[0].innerText;
  const productObj = {
    productName: products,
    productPrice: parseFloat(prices)
  }
  productInfo.push(productObj);
  showProduct(productInfo);
}