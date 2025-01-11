import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import data from '../utils/data';
import { FaStar, FaMinus, FaPlus } from 'react-icons/fa';
import GradientCanvas from '../components/Granim'


const Product = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const product = data[language].products[0]; // For demo, using first product
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (action) => {
        if (action === 'increase') {
            setQuantity(prev => prev + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleCheckout = () => {
        navigate('/checkout', {
            state: {
                productName: product.name,
                quantity: quantity,
                totalAmount: product.price * quantity,
                productImage: product.image,
                price: product.price
            }
        });
    };

    return (
        <div className="pt-20 min-h-screen relative">
              <GradientCanvas />
            <div className=" relative z-10 px-4 py-12">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Product Image Section */}
                        <div className="w-full md:w-1/2 p-8">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Product Details Section */}
                        <div className="w-full md:w-1/2 p-8">
                            {/* Product Title and Rating */}
                            <h1 className="text-4xl font-bold font-poppins mb-4">{product.name}</h1>
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-2xl" />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                                {product.oldPrice && (
                                    <span className="ml-2 text-xl text-gray-400 line-through">
                                        ${product.oldPrice}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Quantity Selector */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleQuantityChange('decrease')}
                                        className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="text-xl font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange('increase')}
                                        className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>

                            {/* Total Price */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-2">Total Price</h3>
                                <span className="text-2xl font-bold text-blue-600">
                                    ${(product.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            {/* Buy Now Button */}
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-blue-600 text-white py-4 px-8 rounded-xl text-xl font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;