import React, { Component} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext(); // Need to read about Context API

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: storeProducts,
        modalOpen: false,
        modalProduct : detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
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
            return {products: tempProducts};
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product};
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index];
        product.inCart = true;
        product.count += 1;
        var price = product.price;
        product.total = price * product.count;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        },() => {console.log(this.state)});
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalOpen: true, modalProduct: product};
        })
    };

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false};
        })
    };
    
    increment = (id) => {
        console.log('this is increment method');
    };

    decrement = (id) => {
        console.log('this is decrement method');
    };

    removeItem = (id) => {
        console.log('item removed');
    };

    clearCart = (id) => {
        console.log('cart cleard');
    }

    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                incrementId: this.increment,
                decrementId: this.decrement,
                clearCart: this.clearCart,
                removeItem: this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};