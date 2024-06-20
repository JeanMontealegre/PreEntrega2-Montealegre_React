import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState(greeting);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                const products = await response.json();
                if (categoryId) {
                    setItems(products.filter(product => product.category === categoryId));
                    setTitle(categoryId.charAt(0).toUpperCase() + categoryId.slice(1));
                } else {
                    setItems(products);
                    setTitle(greeting);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [categoryId, greeting]);

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-center text-5xl font-extrabold text-blue-900 mb-6">{title}</h1>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer
