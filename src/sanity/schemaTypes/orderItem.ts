// schemas/orderItem.js
const orderItem = {
    name: 'orderItem',
    title: 'Order Item',
    type: 'object',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
    ],
  };
  export default orderItem