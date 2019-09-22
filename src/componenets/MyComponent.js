import React from 'react';
import {Component} from 'react';

class MyComponent extends Component {


    render() {

        return (
            <div className="MyComponent">
                <h1>Title: {this.props.title}</h1>
                <h2>sub Title: {this.props.subTitle}</h2>
            </div>
        );
    }
}

export default MyComponent;
