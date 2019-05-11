import React, { Component} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
    }
    handleDetail = () => {
        console.log('Inside handle detail.')
    }
    addToCart = () => {
        console.log('Inside add to cart.')
    }
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};