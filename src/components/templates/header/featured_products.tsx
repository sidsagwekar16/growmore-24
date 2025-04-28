import * as React from "react";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  category?: string;
  description?: string;
  price?: number;
  quantity?: number;
  tags?: string[];
}

const DEFAULT_IMAGE = "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&";

const ProductCard: React.FC<ProductProps> = ({
  imgSrc = DEFAULT_IMAGE,
  imgAlt = "Product Image",
  title = "Unknown Product",
  category = "N/A",
  description = "No description available",
  price = 0,
  quantity = 0,
  tags = [],
}) => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    navigate(`/product/${category}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col w-full h-full lg:max-w-[90%] font-manrope">
      <article className="bg-neutral-50 border border-solid border-zinc-200 rounded-3xl overflow-hidden h-full flex flex-col">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="object-contain w-full h-42"
        />
        <div className="p-4 flex flex-col gap-2 flex-grow">
          <h2 className="text-xl font-extrabold text-zinc-900">{title}</h2>
          <p className="text-sm text-zinc-600">Category: {category}</p>
          <p className="text-sm text-zinc-600">Description: {description}</p>
          <p className="text-sm text-zinc-600">Price: ₹{price}</p>
          <p className="text-sm text-zinc-600">Quantity: {quantity}</p>
          <p className="text-sm text-zinc-600">Tags: {tags.length ? tags.join(", ") : "No tags"}</p>
        </div>
      </article>
      <div className="flex gap-2 py-4 font-manrope">
        <button
          className="flex-1 py-3 text-sm font-bold text-black border border-sky-800 rounded-lg hover:bg-sky-50"
          onClick={(e) => handleNavigate(e, category)}
        >
          View more
        </button>
        <div className="flex-1 hidden lg:block">
          <button className="w-full py-3 text-sm font-bold text-white bg-sky-800 rounded-lg hover:bg-sky-700">
            Enquire now
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://growmore-backend.vercel.app/admin/inventory/collection/Home"
      );
      const data = await response.json();
      const formattedProducts = data.items
        .map((item: any) => {
          const key = Object.keys(item)[0];
          const product = item[key];
          if (!product || typeof product !== "object") return null;
          return {
            imgSrc: DEFAULT_IMAGE,
            imgAlt: key,
            title: key,
            category: product.category || "N/A",
            description: product.description || "No description",
            price: product.price || 0,
            quantity: product.quantity || 0,
            tags: product.tags || [],
          };
        })
        .filter(Boolean);
      setProducts(formattedProducts);
    } catch (error) {
      console.error("Error fetching data", error);
      setProducts([]);
    }
  };

  return (
    <div className="bg-white min-h-screen mb-10">
      <main className="mt-24 md:px-[7%] w-full px-9">
        <div>
          <h3 className="text-2xl text-red-600 font-covered">Explore More</h3>
          <h1 className="text-5xl font-semibold text-zinc-800 mt-2 font-manrope">Products</h1>
        </div>
        <section className="mt-10" aria-label="Product listing">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div className="h-full" key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductCatalog;