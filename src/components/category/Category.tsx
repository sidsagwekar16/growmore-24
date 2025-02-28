import * as React from "react";
import { useNavigate } from "react-router-dom";

// Define the product interface based on API structure
interface ProductProps {
  name?:string,
  description?:string,
  image_url?:string
}

// Default image URL for products
const DEFAULT_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&";



const ProductCard: React.FC<ProductProps> = ({
  image_url,
  description,
  name

}) => {

  const navigate = useNavigate()
  const handleNavigate = (e,name) =>{
    e.preventDefault()
    navigate(`/product-list/${name}`)
    window.scrollTo(0,0)
  }
  
  return (
    <div className="flex flex-col h-full">
      <article className="flex flex-col w-[90vw] mx-auto sm:w-[20vw] border-t-2 border-solid border-zinc-200 rounded-3xl h-max"> 
        {/* Image section with fixed height */}
        <img
          loading="lazy"
          src={image_url}
          alt={name}
          className="object-cover w-full rounded-t-3xl h-[45vh]" 
        />
        <p className=" px-3 my-3 text-center text-2xl font-bold">{name}</p>
      </article>
  

      <div className="flex items-center justify-between gap-2 my-2 bg-white w-full">
        <button className="flex-1 py-3 text-md font-bold text-black border-2 border-sky-800 rounded-xl hover:bg-sky-50 transition-colors" onClick={e => handleNavigate(e, name)}>
          View more
        </button>
      </div>
    </div>
  );
  
  
}

const Category: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
  // 
      const response = await fetch("https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/inventory/categories");
      const data = await response.json();
      setProducts(data.categories);
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
      <main className="flex flex-col items-center self-center mt-24 w-full max-w-[1733px] px-9 max-md:mt-10 max-md:px-5">
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

export default Category;