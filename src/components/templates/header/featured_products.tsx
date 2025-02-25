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

// Product card component
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
  return(
  <div className="flex flex-col h-full max-w-[45vw]"> {/* Ensure full height */}
    <article className="flex flex-col flex-grow w-full bg-neutral-50 border border-solid border-zinc-200 rounded-3xl h-full">
      {/* Image section with fixed height */}
      <img
        loading="lazy"
        src={imgSrc}
        alt={imgAlt}
        className="object-fill w-full rounded-t-3xl h-48" // Fixed height for uniformity
      />
      
      {/* Details section that expands to match height */}
      <div className="flex flex-col flex-grow px-4 mt-2 mb-6">
        <h2 className="text-[1.2rem] font-extrabold text-zinc-900">{title}</h2>
        
        <dl className="mt-2 text-base text-zinc-600 space-y-1 flex-grow">
          <div>
            <dt className="font-medium inline">Category: </dt>
            <dd className="inline">{category}</dd>
          </div>
          <div>
            <dt className="font-medium inline">Description: </dt>
            <dd className="inline">{description}</dd>
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
            <dd className="inline break-words">{tags.length ? tags.join(", ") : "No tags"}</dd>
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
)}

// Product catalog component
const ProductCatalog: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  // Fetch product data on component mount
  React.useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/inventory/collection/Home"
      );
      const data = await response.json();

      // Transform API data into ProductProps format
      const formattedProducts = data.items
        .map((item: any) => {
          const key = Object.keys(item)[0]; // Extract product name
          const product = item[key]; // Get product details

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
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex flex-col items-center self-center mt-24 w-full px-9">
        <div className="w-full ml-[3vw]">
          <h3 className="text-2xl text-red-600">Explore More</h3>
          <h1 className="text-5xl font-extrabold text-zinc-800 mt-2">Products</h1>
        </div>

        {/* Product Listing */}
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
