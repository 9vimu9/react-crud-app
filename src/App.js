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
        if(!this.state.shouldRenderTitle)
        {
            return null;
        }
        return <h1>Title</h1>
    }

    render() {

        return (
            <div className="App">
                {this.renderTitle()}
            </div>
        );
    }
}

export default App;
