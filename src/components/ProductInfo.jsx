import React, { useContext } from 'react';
import '../styles/ProductInfo.scss';
import iconAddToCart from "@icons/bt_add_to_cart.svg";
import AppContext from '../context/AppContext';


const ProductInfo = ({ product }) => {

	const { addToCart } = useContext(AppContext);
	const cover = product.images && product.images.length > 0 ? product.images[0] : '';


	const handleClick = item => {
		addToCart(item);
	}

	return (
		<>
			<img src={cover} alt={product.title} />
			<div className="ProductInfo">
				<p>{product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button" onClick={() => handleClick(product)}>
					<img src={iconAddToCart} alt="bt_add_to_cart.svg" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
