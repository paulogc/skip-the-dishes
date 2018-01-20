function updateProducts(payload) {
  const content = {};
  const ids = [];

  payload.forEach((item) => {
    const { productID } = item;
    if (!ids.includes(productID)) {
      ids.push(productID);
    }

    content[productID] = item;
  });

  return { ids, content }
};

export default updateProducts;
