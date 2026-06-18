import { useState,useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import Hero from '../components/hero.jsx';
import { useSelectedProductContext } from '../context/selectedProductContext.jsx';
import ProductGrid from '../components/productGrid.jsx';
import ProductCard from '../components/productCard.jsx';
import '../css/homePage.css';
import Footer from '../components/footer.jsx';

function Home() {
    const {selectedProduct,setSelectedProduct} =useSelectedProductContext();
    

    return (
        <div className="home-layout">
            <Navbar />
            <main className="main-content-area" style={{ minHeight: '70vh' }}>
                {selectedProduct ? (
                    <ProductCard 
                        item={selectedProduct} 
                        onBack={() => setSelectedProduct(null)} 
                    />
                ) : (
                    <div className='hero=productGrid-section'>
                        <Hero />
                        <ProductGrid />
                    </div>
                    
                )}
            </main>
            {/* <Footer /> */}
            <Footer />
        </div>
    );
}

export default Home;