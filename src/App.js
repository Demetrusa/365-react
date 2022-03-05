import react from 'react';
import './App.css';
import Benefit from './components/dropShipPage/BenefitPage/Benefit';
import Product from './components/dropShipPage/Product';




export default function App() {
 

  return (
    <div className="App">
     <Product />
     <Benefit />
    </div>
  );
}

