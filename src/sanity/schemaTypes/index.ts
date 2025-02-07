import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product' // Ensure this is correctly exported in ./product
import order from './order';
import customer from './customer';
import cartItem from './cartItem';
import orderItem from './orderItem';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order,cartItem, customer, orderItem],
}
