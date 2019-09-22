import React from 'react';
import './App.css';
import './componenets/MyComponent'

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={//use state inside constructor this good for set initial values
            name:"enter your name here",
        };
        this.updateName = this.updateName.bind(this)

    }

updateName(event)
{
    this.setState({
       name:event.target.value
    });
}

    render() {

        return (
            <div className="App">
                <input type="text"
                       name="name"
                       onChange={this.updateName}
                       value={this.state.name} />
            </div>
        );
    }
}

export default App;
