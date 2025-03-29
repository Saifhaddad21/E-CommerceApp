export const orderSummary = {
  order: {
    amount: 7000,
    currency: '₹',
  },
  shipping: {
    amount: 30,
    currency: '₹',
  },
  get total() {
    return {
      amount: this.order.amount + this.shipping.amount,
      currency: this.order.currency,
    };
  },
};

export default orderSummary;
