import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <ProductList data={sampleData.products} title="Newest arrivals" />
    </div>
  );
}
