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
                <th><button onClick='deletedProduct(this, ${i})' class='inline-block px-2 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Delete</button></th>
        `
    productRow.appendChild(tr);
  }
  const tr = document.createElement('tr');
  tr.innerHTML = `
            <th colspan="2">${cart.length} Items price Total</th>
            <th>${totalPrice}</th>
  `
  productRow.appendChild(tr);
}

function deletedProduct(child, i) {
  // const product = element.parentNode.parentNode.children[1].innerText;
  // const price = element.parentNode.parentNode.children[2].innerText
  // const productRow = document.getElementById('product-row');
  // console.log(productRow.children[i], i)
  // productRow.children[i].remove();
  // shoppingCart();
  // showProduct();
  // productRow.parentNode.remove();
  // const child = document.getElementById('child');
  // child.parentElement.remove();

  console.log(child.parentNode.parentNode.children[1].innerText,);
  productInfo.splice(i, 1);
  showProduct(productInfo);
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