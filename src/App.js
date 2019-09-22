import React from 'react';
import logo from './logo.svg';
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
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
