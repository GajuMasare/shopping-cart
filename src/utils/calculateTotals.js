// src/utils/calculateTotals.js

export const calculateTotals = (items) => {
  let subtotal = 0;
  let savings = 0;

  items.forEach((item) => {
    subtotal += item.price * item.quantity;

    // Example logic for savings
    if (item.name.toLowerCase() === "soup" && item.quantity > 0) {
      savings += (item.price / 2) * item.quantity; // Assume half-price bread with soup
    }

    // Example for buy 2 get 1 free for butter
    if (item.name.toLowerCase() === "butter") {
      const freeButter = Math.floor(item.quantity / 2);
      savings += item.price * freeButter; // Save the price of free butter
    }
  });

  const total = subtotal - savings;

  return { subtotal, total, savings };
};
