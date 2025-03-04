import * as React from "react";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  name?: string;
  description?: string;
  image_url?: string;
}

const DEFAULT_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&";

const ProductCard: React.FC<ProductProps> = ({ image_url, name }) => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent, name?: string) => {
    e.preventDefault();
    if (name) navigate(`/product-list/${name}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col rounded-3xl w-full overflow-hidden">
        <img
          loading="lazy"
          src={image_url || DEFAULT_IMAGE}
          alt={name || "Product"}
          className="object-cover w-full h-60 border rounded-3xl"
        />
        <div className="flex items-center justify-center p-2 bg-white">
          <p className="text-lg font-bold text-center">{name}</p>
        </div>
      </div>
      <button
        className="w-full mt-4 pt-3 pb-2 text-md font-bold text-black border-2 border-sky-800 rounded-xl hover:bg-sky-50 transition-colors"
        onClick={(e) => handleNavigate(e, name)}
      >
        View More
      </button>
    </div>
  );
};

const Category: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/inventory/categories");
      const data = await response.json();
      setProducts(data.categories);
    } catch (error) {
      console.error("Error fetching data", error);
      setProducts([]);
    }
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="flex justify-center items-center px-8 pt-20 pb-20 w-full bg-gray-900">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center">
          OUR PRODUCTS
        </h1>
      </header>
      <main className="flex flex-col items-center w-[90%] lg:w-[80%] mx-auto px-6 py-10">
        <section className="w-full" aria-label="Product listing">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Category;
