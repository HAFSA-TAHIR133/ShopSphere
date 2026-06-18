import { products } from '../data/products.js';
import { useSelectedProductContext } from '../context/selectedProductContext.jsx';
import '../css/productGrid.css'

function ProductGrid() {
    const {selectedProduct, setSelectedProduct} =useSelectedProductContext();
    return (
        <div className="store-container">
            <h3 className="store-title">Available Products</h3>
            <div className='grid-layout'>
                {products.map((value) => (
                    <div className='product-item' key={value.id}>
                        <div className="img-wrapper">
                            <img src={value.image} alt={value.name} width="100px"/> 
                        </div>
                        <h4>{value.name}</h4> 
                        <p className="price">${value.price}</p>
                        
                        {/* Trigger the parent's state change on click */}
                        <button className="view-btn" onClick={() => setSelectedProduct(value)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;