import React, { Component} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext(); // Need to read about Context API

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct : detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }
    // Need to read about componentDidMount()
    componentDidMount() {
        this.setProducts();
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
        });
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
        var tempSubTotal = this.state.cartSubTotal;
        var tempTax = this.state.cartTax;
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index];
        product.inCart = true;
        product.count += 1;
        var price = product.price;
        product.total = price * product.count;
        tempSubTotal = tempSubTotal + product.total;
        tempTax = tempTax + product.tax;
        var finalTotal = tempSubTotal + tempTax;
        this.setState(() => {
            return {
                products: tempProducts, 
                cart: [...this.state.cart, product], 
                cartSubTotal: tempSubTotal,
                cartTax: tempTax,
                cartTotal: finalTotal, 
            };
        });
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalOpen: true, modalProduct: product};
        });
    };

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false};
        });
    };
    
    increment = (id) => {
        let finalTotal = 0;
        let tempSubTotal = this.state.cartSubTotal;
        let tempTax = this.state.cartTax;
        let tempCart = this.state.cart;
        tempCart.map(item => {
            if (item.id === id) {
                item.count += 1;
                item.total = item.total + item.price;
                tempSubTotal = tempSubTotal + item.price;
                tempTax = tempTax + item.tax;
                finalTotal = tempSubTotal + tempTax;
            };
        });
        this.setState(() => {
            return {
                cart: tempCart,
                cartSubTotal: tempSubTotal,
                cartTax: tempTax,
                cartTotal: finalTotal,
            };
        });
    };

    decrement = (id) => {
        let finalTotal = 0;
        let tempSubTotal = this.state.cartSubTotal;
        let tempTax = this.state.cartTax;
        let tempCart = this.state.cart;
        tempCart.map(item => {
            if (item.id === id) {
                if (item.count === 1) {
                    this.removeItem(id);
                    for (var index in tempCart) {
                        tempSubTotal = (tempCart[index].count * tempCart[index].price);
                        tempTax = (tempCart[index].count * tempCart[index].tax);
                    }
                    finalTotal = (tempSubTotal + tempTax);
                }
                else {
                    item.count -= 1;
                    item.total = item.total - item.price;    
                    tempSubTotal = tempSubTotal - item.price;
                    tempTax = tempTax - item.tax;
                    finalTotal = tempSubTotal + tempTax;
                }
            };
        });
        this.setState(() => {
            return {
                cart: tempCart,
                cartSubTotal: tempSubTotal,
                cartTax: tempTax,
                cartTotal: finalTotal,
            };
        });
    };

    removeItem = (id) => {
        let tempSubTotal = 0;
        let tempTax = 0;
        let tempCart = this.state.cart;
        tempCart.map(item => {
            var index = tempCart.indexOf(item)
            if (item.id === id) {
                item.count = 0;
                item.inCart = false;
                tempCart.splice(index, 1);
            };
        });
        for (var index in tempCart) {
            tempSubTotal = tempSubTotal + (tempCart[index].count * tempCart[index].price);
            tempTax = tempTax + (tempCart[index].count * tempCart[index].tax);
        }
        var finalTotal = (tempSubTotal + tempTax);
        this.setState(() => {
            return {
                cart: tempCart,
                cartSubTotal: tempSubTotal,
                cartTax: tempTax,
                cartTotal: finalTotal,
            };
        });
    };

    clearCart = () => {
        let tempCart = this.state.cart;
        tempCart.map(item => {
            item.count = 0;
            item.inCart = false;
        });
        this.setState(() => {
            return {
                cart: [],
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0,
            };
        });
    };

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