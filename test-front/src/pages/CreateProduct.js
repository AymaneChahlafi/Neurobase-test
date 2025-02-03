import React, { useState } from 'react';
import { createProduct } from './api'; // Import the function for the API request

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const newProduct = await createProduct(product);
            console.log('Product created successfully:', newProduct);
            setProduct({ name: '', description: '', price: '' }); // Reset form after successful creation
        } catch (err) {
            console.error('Error creating product:', err);
            setError('There was an error creating the product. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="create-product">
            <h2>Create a New Product</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Create Product'}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
