export function normalizeOrder(products, cousine, total) {
  return {
    id: 1,
    date: '2018-03-18T21:16:32.262Z',
    customerId: 1,
    deliveryAddress: 'Rua 3',
    contact: '9909990990',
    storeId: cousine.id,
    orderItems: normalizerProduct(products),
    total: total,
    status: 'preparing',
    lastUpdate: '2018-03-18T21:16:32.262Z',
  }
}

export function normalizerProduct(products) {
  return products.map(product => {
    const {
      id,
      price,
    } = product;

    return {
      id,
      orderId: 1,
      productId: id,
      product,
      price,
      quantity: 1,
      total: price,
    }
  });
}
