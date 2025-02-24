import React from 'react';
import { Header } from './components/templates/header/Header'; // Use named export
import './App.css'


const App: React.FC = () => {
    return (
      <div>
        <Header /> {/* Renders the pre-made Header component */}
      </div>
    );
  };
  
  export default App;
  
