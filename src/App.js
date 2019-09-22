import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props)
    {
        super(props)
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
                    <form onSubmit={this.onSubmit}>
                        <input name ="user_name" type="text" onChange={this.onChange} ref={user_name=>this.userName=user_name}/>
                    </form>
                </header>
            </div>
        );
    }
}

export default App;
