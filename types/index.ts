import { z } from "zod";
import {
  cartItemSchema,
  insertCartSchema,
  insertProductSchema,
} from "@/lib/validators";
type InsertProductScheme = Omit<z.infer<typeof insertProductSchema>, "price">;
export type Product = InsertProductScheme & {
  id: string;
  rating: any;
  createdAt: Date;
  price: any;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
