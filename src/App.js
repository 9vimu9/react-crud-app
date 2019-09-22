import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={//use state inside constructor
            title:"app title"
        };
        this.onSubmit = this.onSubmit.bind(this)

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
            </div>
        );
    }
}

export default App;
