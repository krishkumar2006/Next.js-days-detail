import { type SchemaTypeDefinition } from 'sanity'
import products from "../../sanity/products"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
