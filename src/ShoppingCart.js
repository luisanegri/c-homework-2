module.exports = class ShoppingCart {
  constructor() {
    // items starts empty
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    // additem method pushes object to items array
    return this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }
  clear() {
    // clear method becomes an empty array
    return (this.items = []);
  }
  total() {
    return this.items.reduce((acc, value) => {
      // val is quantity * pricePerUnit
      return acc + value.quantity * value.pricePerUnit;
    }, 0);
  }
};
