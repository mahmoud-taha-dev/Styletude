const calcGrandTotal = (products) => {
  return products
    .reduce((acc, el) => {
      return acc + el.price * +el.quantity;
    }, 0)
    .toFixed(2);
};

export default calcGrandTotal;
