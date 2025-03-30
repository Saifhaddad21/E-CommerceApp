export const paymentMethods = [
  {
    id: '1',
    name: 'Credit Card',
    type: 'VISA',
    lastDigits: '1234',
    expiryDate: '12/25',
    isDefault: true,
  },
  {
    id: '2',
    name: 'PayPal',
    email: 'user@example.com',
    isDefault: false,
  },
  {
    id: '3',
    name: 'Google Pay',
    email: 'user@gmail.com',
    isDefault: false,
  },
  {
    id: '4',
    name: 'Apple Pay',
    deviceName: 'iPhone 13 Pro',
    isDefault: false,
  },
];

export default paymentMethods;
