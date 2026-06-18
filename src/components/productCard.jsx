import '../components/productGrid.jsx';
import '../css/productCard.css';
import { useCartContext } from '../context/cartContext.jsx';

function ProductCard({ item, onBack }) {
    const { setCartCount } = useCartContext();

    const handleViewBtn = (product) => {
        alert(`${product.name} added to cart!`);

        setCartCount(prev => {
            const existing = prev.find(
                cartItem => cartItem.id === product.id
            );

            if (existing) {
                return prev.map(cartItem =>
                    cartItem.id === product.id
                        ? {
                              ...cartItem,
                              quantity: cartItem.quantity + 1
                          }
                        : cartItem
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });

        setCount(prev => prev + 1);
    };

    return (
        <div className="single-product-view">
            <button className="back-btn" onClick={onBack}>
                ← Back to Products
            </button>

            <div className="detail-card-container">
                <div className="detail-img-section">
                    <img src={item.image} alt={item.name} />
                </div>

                <div className="detail-info-section">
                    <span className="category-tag">
                        Product Details
                    </span>

                    <h2>{item.name}</h2>

                    <p className="detail-id">
                        Item ID: #{item.id}
                    </p>

                    <h3 className="detail-price">
                        ${item.price}
                    </h3>

                    <p className="detail-description">
                        Premium software engineering equipment engineered
                        for ultimate durability and performance metrics.
                    </p>

                    <button
                        className="add-to-cart-btn"
                        onClick={() => handleViewBtn(item)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;