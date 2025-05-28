import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";
type InsertProductScheme = Omit<z.infer<typeof insertProductSchema>, "price">;
export type Product = InsertProductScheme & {
  id: string;
  rating: any;
  createdAt: Date;
  price: any;
};
