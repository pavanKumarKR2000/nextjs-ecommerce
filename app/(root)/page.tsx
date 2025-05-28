import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList
        data={latestProducts}
        title="Newest arrivals"
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </div>
  );
}
