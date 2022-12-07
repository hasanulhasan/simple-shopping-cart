const productInfo = [];

function showProduct(cart) {
  const productRow = document.getElementById('product-row');
  productRow.innerHTML = ``;

  for (i = 0; i < cart.length; i++) {
    console.log(cart[i].productName, cart[i].productPrice);
    const tr = document.createElement('tr');
    // tr.innerHTML = ``;
    tr.innerHTML = `
            <th>${i + 1}</th>
            <th>${cart[i].productName}</th>
            <th>${cart[i].productPrice}</th>
    `
    productRow.appendChild(tr);
  }

}

function shoppingCart(element) {
  let products = element.parentNode.children[0].innerText;
  let prices = element.parentNode.children[1].children[0].innerText;
  const productObj = {
    productName: products,
    productPrice: prices
  }
  productInfo.push(productObj);
  showProduct(productInfo);
}