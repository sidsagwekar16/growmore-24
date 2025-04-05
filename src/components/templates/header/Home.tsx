import React from 'react';
import { BlogSection } from '../blogs/blog/BlogSection.tsx';
import { Contact } from '../contact-us/contact/Contact.tsx';
import { TestimonialsSection } from '../testimonials/TestimonialsSection.tsx';
import AgricultureHero from '../AgricultureHero.tsx';
import ServicesSection from '../ServicesSection.tsx';
import MyComponent from '../MyComponent.tsx';
import ProductCatalog from '../header/featured_products.tsx';
import Introduction from './Introduction.tsx';

const Home = () => {
    return (
      <header className="w-[100vw] overflow-x-hidden">
        <MyComponent />
        <Introduction />
        {/* <ProductCatalog/>*/}
        <ServicesSection /> 
        <AgricultureHero />
        <TestimonialsSection />  
        <Contact />
        <BlogSection /> 

      </header>
    );
  };
  
  export default Home;