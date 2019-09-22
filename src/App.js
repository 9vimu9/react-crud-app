import React from 'react';
import './App.css';
import './componenets/MyComponent'

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={//use state inside constructor this good for set initial values
            shouldRenderTitle:true,
        };

    }

    renderTitle()
    {

        return this.state.shouldRenderTitle
    }

    render() {

        return (
            <div className="App">
                {
                    this.renderTitle()
                    ? <h1>totle</h1>
                    :null
                }
            </div>
        );
    }
}

export default App;
