import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';
import useGetProduct from '@hooks/useGetProduct';
import iconClose from "@icons/icon_close.png";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductDetail = ({ id }) => {
	const product = useGetProduct(`${API}/${id}`);

	const back = () => {
		window.history.back();
	}

	return (
		<div className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={iconClose} alt="close" onClick={back} />
			</div>
			<ProductInfo product={product} />
		</div>
	);
}

export default ProductDetail;
