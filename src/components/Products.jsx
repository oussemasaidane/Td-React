import React , {Component} from 'react';
import product from '../data/products.json';
import Product from './Product';




class Products extends Component {

    render() {
        const {products} = props.product.map(prod=> {
            return (
                <Product>
                    name ={prod.name}
                    price={prod.price}
                    image={prod.img}
                    quantity={prod.quantity}
                    description={prod.description}

                </Product>
            )

        })
        
        return (
            {products}
        );
    }
}
 
export default Products;