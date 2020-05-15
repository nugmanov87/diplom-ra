/* eslint-disable max-len */
export function funcChangeBasket(itemProduct) {
  let productList = JSON.parse(localStorage.getItem('basketProduct'));
  const indexProducts = productList.findIndex((item) => item.id === itemProduct.id && item.size === itemProduct.size);
  if (indexProducts !== -1) {
    productList = productList.map((product) => {
      if (product.id === itemProduct.id) {
        return {
          ...product,
          amount: Number(product.amount) + Number(itemProduct.amount),
        };
      }
      return { ...product };
    });
  } else {
    productList.push(itemProduct);
  }
  localStorage.setItem('basketProduct', JSON.stringify(productList));
  return productList;
}

export function funcRemoveBasket(idAndSize) {
  let productList = JSON.parse(localStorage.getItem('basketProduct'));
  productList = productList.filter((item) => `${item.id}${item.size}` !== idAndSize);
  localStorage.setItem('basketProduct', JSON.stringify(productList));
  return productList;
}

export function funcClearBasket() {
  localStorage.setItem('basketProduct', JSON.stringify([]));
  return [];
}
