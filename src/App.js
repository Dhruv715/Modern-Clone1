
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Product from './Component/Product';
import ProductData  from './Data/ProductData';
import Footer from './Component/Footer';
function App() {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Product ProductData={ProductData}/>
        <Footer/>
    </>
  );
}

export default App;
