export function addToCart(state, payload) {
  const { ids, content } = state;
  const { productID } = payload.data;

  if (!ids.includes(productID)) {
    ids.push(productID);
    content[productID] = { quantity: 1 };
  }

  return { ids, content };
}

export function updateQuantity(state, payload) {
  const { ids, content } = state;
  const { productID, quantity } = payload.data;

  content[productID] = { quantity };

  return { ids, content };
}

export function removeFromCart(state, payload) {
  const { ids, content } = state;
  const { productID } = payload.data;
  const updatedContent = {};
  let updatedIds = [];

  updatedIds = ids.filter(id => id !== productID);
  updatedIds.forEach((id) => {
    updatedContent[id] = content[id];
  });

  return { ids: updatedIds, content: updatedContent };
} 
