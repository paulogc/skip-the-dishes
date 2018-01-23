export default function calculateTotalPrice({ ids, content }) {
  let total = 0;

  ids.forEach((id) => {
    total += content[id].quantity * content[id].unitPrice;
  });

  return total;
};
