import React from 'react'
import ProductDetail from '../containers/ProductDetail';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();

    return (
        <section className="d-flex justify-content-center position-relative" style={{ 'padding': '4rem' }}>
            <ProductDetail id={id} />
        </section>
    )
}

export default Product;
