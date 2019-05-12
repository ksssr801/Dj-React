import React, { Component} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext(); // Need to read about Context API

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
    }
    // Need to read about componentDidMount()
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        // Need to read about State
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        });
    };

    addToCart = (id) => {
        console.log(`Inside add to cart id is ${id}`)
    };
    
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