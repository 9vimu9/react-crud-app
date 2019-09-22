import React from 'react';
import './App.css';
import './componenets/MyComponent'
import MyComponent from "./componenets/MyComponent";

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={//use state inside constructor
            title:"app title"
        };
        this.onClick = this.onClick.bind(this)

    }

    onClick()
    {
        this.setState({
            title:"new title"
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
                <h1>{this.state.title}</h1>
                <div onClick={this.onClick}>click here</div>
                <MyComponent
                    title="this is title"
                    // subTitle="this is sub title"
                    onClick={this.onClick}
                />
            </div>
        );
    }
}

export default App;
