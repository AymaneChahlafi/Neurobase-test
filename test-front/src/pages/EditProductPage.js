import React, { useEffect, useState } from 'react';
import { getProduct, createProduct, updateProduct } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProductPage = () => {
    const [product, setProduct] = useState({ name: '', price: '', description: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const data = await getProduct(id);
                setProduct(data);
            };
            fetchProduct();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateProduct(id, product);
        } else {
            await createProduct(product);
        }
        navigate('/products');  // After submission, navigate back to the product listing page
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>{id ? 'Edit Product' : 'Create Product'}</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={product.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        value={product.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        value={product.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        {id ? 'Update' : 'Create'} Product
                                    </button>
                                    <button className="btn btn-secondary mt-3" onClick={() => navigate('/products')}>
                                        Go Back
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductPage;
