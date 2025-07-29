import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import iconClose from "@icons/icon_close.png";
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = item => {
		removeFromCart(item)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<div>
				<div className='flex'>
					<p className='OrderItemTitle'>{product.title}</p>
					<div>
						<img className='IconClose' src={iconClose} alt="close" onClick={() => handleRemove(product)} />
					</div>
				</div>
				<div className='flex'>
					<div className="WrapQuantity">
						<button type="button">-</button>
						<input type="number" name='quantity' value={product.quantity} disabled />
						<button type="button">+</button>
					</div>
					<div className="WrapPrice">
						<p className='m-0'>${product.price * product.quantity}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderItem;
