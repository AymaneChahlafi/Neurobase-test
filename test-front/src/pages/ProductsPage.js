import React, { useState, useEffect } from 'react';
import TrieSearch from 'trie-search';
import { useNavigate } from 'react-router-dom';
import { getProducts, deleteProduct } from '../api/api';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trie, setTrie] = useState(new TrieSearch('name'));
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            const validatedData = data.map(product => ({
                ...product,
                price: Number(product.price),
            }));

            setProducts(validatedData);
            const newTrie = new TrieSearch('name');
            newTrie.addAll(validatedData);
            setTrie(newTrie);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await deleteProduct(id);
            fetchProducts();
        }
    };

    const processedProducts = () => {
        let filtered = searchTerm ? trie.search(searchTerm) : [...products];

        if (sortConfig.key === 'price') {
            filtered.sort((a, b) => {
                return sortConfig.direction === 'asc' ? a.price - b.price : b.price - a.price;
            });
        }

        return filtered;
    };

    const requestSort = () => {
        setSortConfig(prev => ({
            key: 'price',
            direction: prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="mb-4">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search products..."
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="col-12 col-md-6 text-md-right">
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/create')}
                    >
                        Create Product
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        {['name', 'price', 'description', 'actions'].map((header) => (
                            <th
                                key={header}
                                {...(header === 'price' && {
                                    onClick: requestSort,
                                    className: "sortable-header"
                                })}
                                className="text-center"
                            >
                                {header.charAt(0).toUpperCase() + header.slice(1)}
                                {header === 'price' && sortConfig.key === 'price' && (
                                    <span className="sort-arrow">
                                            {sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}
                                        </span>
                                )}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {processedProducts().map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.description}</td>
                            <td className="text-center">
                                <FaEdit
                                    className="edit-icon"
                                    onClick={() => navigate(`/edit/${product.id}`)}
                                />
                                <FaTrash
                                    className="delete-icon"
                                    onClick={() => handleDelete(product.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {processedProducts().length === 0 && (
                <div className="no-results text-center text-muted">No products found</div>
            )}
        </div>
    );
}

export default ProductsPage;
