const cartItem = {
  name: "cartItem",
  title: "Cart Item",
  type: "object",
  fields: [
    {
      name: "productId",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
};

export default cartItem;
