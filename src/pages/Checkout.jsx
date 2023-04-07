import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';
import '@styles/Checkout.scss';
import AppContext from '../context/AppContext';

const Checkout = () => {
	const { state } = useContext(AppContext);
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
			</div>
		</div>
	);
}

export default Checkout;
