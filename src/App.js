import React from 'react';
import './App.css';
import './componenets/MyComponent'
import MyComponent from "./componenets/MyComponent";

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={//use state inside constructor
            title:"initial title",
            subTitle:"initial subtitle"
        };
        this.onClick = this.onClick.bind(this)

    }

    onClick()
    {
        this.setState({
            title:"title after clikced",
            subTitle:"subtitle after clicled"
        })
    }


    onChange(event)
    {
        console.log(event.target.value)
        // alert("ffffffff");
    }
    onSubmit(event)
    {
        console.log(this.userName.value)
        event.preventDefault();
        alert("submitted")

    }


    render() {

        return (
            <div className="App">
                <div onClick={this.onClick}>click here</div>
                <MyComponent
                    title={this.state.title}
                    subTitle={this.state.subTitle}
                    onClick={this.onClick}
                />
            </div>
        );
    }
}

export default App;
