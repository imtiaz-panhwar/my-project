// schemas/order.js
const order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'stripeSessionId',
      title: 'Stripe Session ID',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'orderItem' }],  // Assuming you have an "orderItem" schema
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['pending', 'paid', 'cancelled'],
      },
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'customerName', // Customer's name
      title: 'Customer Name',
      type: 'string',
    },
    {
      name: 'customerEmail', // Email of the person placing the order
      title: 'Customer Email',
      type: 'string',
    },
    {
      name: 'customerPhone', // Phone number of the person placing the order
      title: 'Customer Phone',
      type: 'string',
    },
    {
      name: 'shippingAddress', // Shipping address
      title: 'Shipping Address',
      type: 'string',
    },
  ],

  // Dynamically set the title of the order document to customerName
  preview: {
    select: {
      title: 'customerName', // This uses customerName as the title in the Sanity dashboard
    },
  },
};
export default order