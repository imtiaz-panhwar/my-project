interface Order {
    id: string; // Unique identifier
    customerId: string; // Reference to the customer
    items: {
      productId: string; // Reference to the product
      productName: string;
      quantity: number;
      price: number; // Price per unit
    }[];
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    status: "pending" | "completed" | "canceled"; // Order status
  }
  