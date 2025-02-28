import * as React from "react";
import { useNavigate } from "react-router-dom";

// Define the product interface based on API structure
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

// Default image URL for products
const DEFAULT_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&";



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

  const navigate = useNavigate()
  const handleNavigate = (e,category) =>{
    e.preventDefault()
    navigate(`/product/${category}`)
    window.scrollTo(0,0)
  }
  
  return (
    <div className="flex flex-col h-full">
      <article className="flex flex-col w-[90vw] mx-auto sm:w-[20vw] bg-neutral-50 border border-solid border-zinc-200 rounded-3xl h-[450px]"> 
        {/* Image section with fixed height */}
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="object-cover w-full rounded-t-3xl h-48" 
        />
        
        {/* Details section that expands to match height */}
        <div className="flex flex-col flex-grow px-4 mt-2 mb-4 overflow-hidden">
          <h2 className="text-[1.2rem] font-extrabold text-zinc-900 truncate">{title}</h2>
          
          <dl className="mt-2 text-base text-zinc-600 space-y-1 flex-grow overflow-hidden">
            <div>
              <dt className="font-medium inline">Category: </dt>
              <dd className="inline truncate">{category}</dd>
            </div>
            <div>
              <dt className="font-medium inline">Description: </dt>
              <dd className="inline truncate">{description}</dd>
            </div>
            <div>
              <dt className="font-medium inline">Price: </dt>
              <dd className="inline">₹{price}</dd>
            </div>
            <div>
              <dt className="font-medium inline">Quantity: </dt>
              <dd className="inline">{quantity}</dd>
            </div>
            <div>
              <dt className="font-medium inline">Tags: </dt>
              <dd className=" flex flex-wrap max-h-12 overflow-hidden text-ellipsis">
                {tags.length ? tags.join(", ") : "No tags"}
              </dd>
            </div>
          </dl>
        </div>
      </article>
  
      {/* Buttons with equal height */}
      <div className="flex items-center justify-between gap-2 my-2 bg-white w-full">
        <button className="flex-1 py-3 text-md font-bold text-black border-2 border-sky-800 rounded-xl hover:bg-sky-50 transition-colors" onClick={e => handleNavigate(e, category)}>
          View more
        </button>
        <button className="flex-1 py-3 text-md font-bold text-white bg-sky-800 rounded-xl hover:bg-sky-700 transition-colors">
          Enquire now
        </button>
      </div>
    </div>
  );
  
  
}

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  // Fetch product data on component mount
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/inventory/collection/Home"
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
    <div className="flex overflow-hidden flex-col bg-white min-h-screen">
      <header className="flex justify-center items-center px-16 pt-28 pb-28 w-full bg-gray-900 max-md:px-5 max-md:pt-24 max-md:pb-28">
        <h1 className="text-6xl font-extrabold text-white text-center max-md:text-4xl">
          OUR PRODUCTS
        </h1>
      </header>
      <main className="flex flex-col self-center mt-24 w-full max-w-[1733px] px-24 max-md:mt-10 max-md:px-5">
        <h2 className="text-5xl font-bold leading-tight text-zinc-800 max-md:text-4xl"> 
          CATEGORY NAME
        </h2>
        <div className="h-1 mt-3 bg-sky-800 w-[191px]" />
        <p className="mt-3 w-full max-w-2xl text-base leading-7 text-zinc-500 text-left">
          Growmore Technologies Limited is a Zambian company specializing in agricultural machinery, 
          with branches across Zambia and Malawi. As the sole distributors of Farmtrac tractors, 
          we also offer agricultural motorbikes, implements, irrigation systems.
        </p>
        <section className="w-full sm:w-[90vw] mt-10" aria-label="Product listing">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-8">
            {products.map((product, index) => (
              <div key={index} className="h-full flex">
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