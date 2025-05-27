import sampleData from "@/db/sample-data";
import ProductCard from "./product-card";

export type Product = (typeof sampleData.products)[0];

interface ProductListProps {
  data: Product[];
  title?: string;
  limit?: number;
}

export default function ProductList({ data, title, limit }: ProductListProps) {
  return (
    <div className="my-10">
      <h2 className="h2-bold">{title}</h2>
      {data.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.slice(0, limit).map((product: Product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      ) : (
        <div>
          <p>hello</p>
        </div>
      )}
    </div>
  );
}
