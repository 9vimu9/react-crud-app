import React from 'react';
import './App.css';

class App extends React.Component {


    onChange(event)
    {
        console.log(event.target.value)
        // alert("ffffffff");
    }


    render() {
        var head ="gggg"
        const list = ["232","fcadfaef"];

        return (
            <div className="App">
                <header className="App-header">
                    <h1>{head}</h1>
                    <ul>
                        {
                            list.map(
                                item => {
                                    return (
                                        <li key={item}>
                                            <div >{item}</div>
                                        </li>
                                    );
                                }
                            )
                        }
                    </ul>
                    <input type="text" onChange={this.onChange}/>
                </header>
            </div>
        );
    }
}

export default App;
