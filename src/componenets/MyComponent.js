import React from 'react';
import {Component} from 'react';

class MyComponent extends Component {


    render() {

        const {title,subtitle} = this.props
        return (
            <div className="MyComponent">
                <h1>Title: {title}</h1>
                <h2>sub Title: {subtitle}</h2>
            </div>
        );
    }
}

export default MyComponent;
