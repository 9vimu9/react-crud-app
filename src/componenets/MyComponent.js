import React from 'react';
import {Component} from 'react';
import PropTypes from "prop-types";

const myComponentPropTypes ={
    title:PropTypes.string.isRequired,
    onClicked:PropTypes.func,
    subTitle:PropTypes.string.isRequired
};

const myComponentDefautlProps ={
    subTitle:"default subtitle"
}

class MyComponent extends Component {


    render() {

        const {title,subTitle,onClick} = this.props;
        return (
            <div className="MyComponent">
                <h1>Title: {title}</h1>
                <h2>sub Title: {subTitle}</h2>
                <div onClick={onClick}>mycomponent clicker</div>
            </div>
        );
    }
}
MyComponent.prototypes = myComponentPropTypes;
MyComponent.defaultProps = myComponentDefautlProps;
export default MyComponent;
