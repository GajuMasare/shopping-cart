export const getFreeItemMessages = (cartItems) => {
  const messages = []; // Store all messages here

  cartItems.forEach((product) => {
    const freeCount = Math.floor(product.quantity / 2); // For every 2 items, get 1 free

    if (product.name.toLowerCase() === "cheese" && freeCount > 0) {
      messages.push(`${freeCount} free cheese will be added`);
    }
    if (product.name.toLowerCase() === "butter" && freeCount > 0) {
      messages.push(`${freeCount} free butter will be added`);
    }
    if (product.name.toLowerCase() === "soup" && product.quantity > 0) {
      messages.push("Bread for half price will be added with soup");
    }
  });

  return messages; // Return all messages
};
