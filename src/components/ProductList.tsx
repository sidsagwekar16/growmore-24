import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

// Define the product interface based on API structure
interface ProductProps {
  imgSrc: string;
  category: string;
  description: string;
  features: string;
  price: string;
  product_name: string;
  product_spec: string;
  quantity: string;
  short_description: string;
  tags: string[];
}

// Default image URL for products
const DEFAULT_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&";

const ProductCard: React.FC<ProductProps> = ({
  imgSrc,
  product_name,
  product_spec,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>, product: string) => {
    e.preventDefault();
    navigate(`/product/${product}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col h-auto bg-white overflow-hidden ">
      <div className=" rounded-2xl">
      <img
        loading="lazy"
        src={imgSrc || DEFAULT_IMAGE}
        alt={product_name}
        className="object-cover w-full h-48 rounded-t-2xl"
      />
      <div className="flex flex-col flex-grow py-4">
        <h2 className="text-lg font-manrope font-semibold text-gray-900 truncate">{product_name}</h2>
        <p className="text-sm font-manrope text-gray-600 truncate">{product_spec}</p>
      </div>
      </div>
      <div className="flex gap-2 py-4">
        <button
          className="flex-1 py-3 text-sm font-manrope font-semibold text-black border border-sky-800 rounded-lg hover:bg-sky-50"
          onClick={(e) => handleNavigate(e, product_name)}
        >
          View more
        </button>
        <div className="flex-1 hidden lg:block">
          <button className="w-full py-3 text-sm font-manrope font-semibold text-white bg-sky-800 rounded-lg hover:bg-sky-700">
            Enquire now
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [productDescription, setProductDescription] = React.useState<string>("");
  const { name } = useParams();

  React.useEffect(() => {
    fetchData();
  }, [name]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/inventory/category/${name}`
      );
      const data = await response.json();
      setProductDescription(data.description);
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching data", error);
      setProducts([]);
    }
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="flex justify-center items-center px-6 py-24 bg-gray-900 text-white text-center">
        <h1 className="text-4xl font-manrope font-semibold sm:text-5xl md:text-6xl">OUR PRODUCTS</h1>
      </header>
      <main className="flex flex-col px-4 md:px-12 lg:px-24 w-[95%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-manrope font-semibold text-gray-800 mt-10">{name}</h2>
        <div className="h-1 mt-2 bg-sky-800 w-20 md:w-40" />
        <p className="mt-2 font-manrope text-gray-500 max-w-2xl">{productDescription}</p>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductCatalog;