import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import iconAddToCart from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {

    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    const showProduct = (id) => {
        window.location.href = `/product/${id}`;
    }

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} onClick={() => showProduct(product.id)} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={iconAddToCart} alt="bt_add_to_cart.svg" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;
