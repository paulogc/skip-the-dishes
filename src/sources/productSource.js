const PRODUCTS_URL = 'https://private-3efa8-products123.apiary-mock.com/products';

async function getProducts() {
  const url = PRODUCTS_URL;
  const request = new Request(
    url,
    {
      method: 'GET',
      timeout: 60000
    }
  );

  const response = await fetch(request);
  console.log(response);
  return response;
};
