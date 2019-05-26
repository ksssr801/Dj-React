import React, { Component} from 'react';
import { widgetList, savedWidgetList } from './data';

const ProductContext = React.createContext(); // Need to read about Context API

class ProductProvider extends Component {
    state = {
        widgets: [],
        savedWidgets: [],
    }
    // Need to read about componentDidMount()
    componentDidMount() {
        this.setWidgetList();
    }

    setWidgetList = () => {
        let tempWidList = [];
        let tempSavedWidList = [];
        widgetList.forEach(item => {
            const singleWidget = {...item};
            tempWidList = [...tempWidList, singleWidget]
        });
        savedWidgetList.forEach(item => {
            const singleWidget = {...item};
            tempSavedWidList = [...tempSavedWidList, singleWidget]
        });
        this.setState(() => {
            return {widgets: tempWidList, savedWidgets: tempSavedWidList};
        })
    }

    saveCurrLayout = (editedLayout) => {
        let tempSavedLayout = [];
        editedLayout.forEach(widget => {
            const singleWidget = {...widget, static:true}
            tempSavedLayout = [...tempSavedLayout, singleWidget]
        });
        this.setState(() => {
            return {savedWidgets: tempSavedLayout};
        })
    }

    editCurrLayout = (savedLayout) => {
        let tempEditLayout = [];
        savedLayout.forEach(widget => {
            const singleWidget = {...widget, static:false}
            tempEditLayout = [...tempEditLayout, singleWidget]
        });
        this.setState(() => {
            return {widgets: tempEditLayout};
        })
    }

    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                saveCurrLayout: this.saveCurrLayout,
                editCurrLayout: this.editCurrLayout,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
