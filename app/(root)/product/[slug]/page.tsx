import AddToCart from "@/components/shared/product/add-to-cart";
import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import Rating from "@/components/shared/product/rating";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { Cart } from "@/types";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const cart = (await getMyCart()) as Cart;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* images column */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        {/* details column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-3">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <Rating value={Number(product.rating)} />
            <p>{product.numReviews} reviews</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/** actions column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out Of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center mt-6">
                  <AddToCart
                    cart={cart}
                    item={{
                      productId: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: String(product.price),
                      qty: 1,
                      image: product.images![0],
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
