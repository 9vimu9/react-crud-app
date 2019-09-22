import React from 'react';
import './App.css';

class App extends React.Component {


    helloWorld()
    {
        console.log("ffffffffffffffffff")
        alert("ffffffff");
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
                                            <div onClick={this.helloWorld}>{item}</div>
                                        </li>
                                    );
                                }
                            )
                        }
                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
