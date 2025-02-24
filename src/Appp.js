import React from 'react';
import { Header } from './components/templates/header/Header.tsx'; // Update the path if needed

import Introduction, { IconTextBlock } from './components/templates/header/Introduction.tsx';
import { Footer } from './components/templates/footer/Footer.tsx';
import { BlogSection } from './components/templates/blogs/blog/BlogSection.tsx';
import { Contact } from './components/templates/contact-us/contact/Contact.tsx';
import { TestimonialsSection } from './components/templates/testimonials/TestimonialsSection.tsx';
import AgricultureHero from './components/templates/AgricultureHero.tsx';
import ServicesSection from './components/templates/ServicesSection.tsx';
import MyComponent from './components/templates/MyComponent.tsx';

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main>
        <MyComponent />
      <Introduction />
      <ServicesSection />
      <AgricultureHero />
      <TestimonialsSection />
      <Contact />
      <BlogSection />
      <Footer />
  
      
      </main> 
     
    </div>
  );
}

export default App;

