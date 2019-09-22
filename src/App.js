import React from 'react';
import './App.css';
import './componenets/MyComponent'

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={//use state inside constructor this good for set initial values
            checked:true,
        };
        this.updateCheck = this.updateCheck.bind(this)

    }

updateCheck()
{
    this.setState({
       checked:!this.state.checked
    });
}

    render() {

        return (
            <div className="App">
                <input type="checkbox"
                       name="name"
                       onChange={this.updateCheck}
                       checked={this.state.checked} />
            </div>
        );
    }
}

export default App;
