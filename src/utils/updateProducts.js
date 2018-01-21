export function updateProducts(payload = { data: [] }) {
  const content = {};
  const ids = [];

  payload.data.forEach((item) => {
    const { productID } = item;
    if (!ids.includes(productID)) {
      ids.push(productID);
      content[productID] = item;
    }
  });

  return { ids, content };
};

export function updateImage(state, payload) {
  const {
    ids,
    content,
  } = state;

  const {
    productID,
    imageSrc,
  } = payload.data;

  content[productID] = {
    ...content[productID],
    imageSrc,
  };

  return { ids, content };
}
