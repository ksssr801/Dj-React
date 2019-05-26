import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { BtnContainer } from '../styled-css';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Test extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    let widgetList = value.widgets;
                    let currLayout = value.savedWidgets;
                    return(
                        <div>
                            <nav className="navbar navbar-expand-sm store-nav navbar-dark px-sm-5" style={{border: '0.1rem solid #dbd6d6'}}>
                                <Link to="/view" className="ml-auto" title="Save">
                                    <BtnContainer 
                                        cart 
                                        onClick={() => {value.saveCurrLayout(currLayout)}}>
                                            <i className="fa fa-save fa-lg"/>&nbsp;&nbsp;Save
                                    </BtnContainer>
                                </Link>
                            </nav>                
                            <ReactGridLayout 
                                className="layout" 
                                layout={widgetList} 
                                cols={12} 
                                rowHeight={100} 
                                width={1500} 
                                onLayoutChange={(widgetList) => {currLayout = widgetList}}>
                                    {widgetList.map(widget => {
                                        return <div style={{border: '0.1rem solid #dbd6d6', backgroundColor: 'red'}} key={widget.i}>{widget.i}</div>
                                    })}
                            </ReactGridLayout>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}