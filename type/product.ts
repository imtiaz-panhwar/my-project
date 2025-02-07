"use client"

export interface IProduct {
  _id: string;
  productName: string;
  category: string;
  price: number;
  quantity:number;
  inventory: number;
  colors?: string[];
  status: string | boolean;
  description?: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  image_url: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
}
