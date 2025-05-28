"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import prisma from "../prisma";
import { convertToPlainObject } from "../utils";

/** get latest products */
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

/** get single product by its slug */
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({ where: { slug } });

  return convertToPlainObject(product);
}
