import React, { Component } from 'react';

class CBCStateEx extends Component {
    constructor() {
        super();
        this.state = {
            users: ["sharon", "554", "hailey"],
            num: 100
        };
    }

    changeNumber = () => {
        this.setState({ num: 200 });
    }

    render() {
        console.log(this);
        return (
            <div>
                <ul>
                    {this.state.users.map((user, i) => (
                        <li key={i}>{user}</li>
                    ))}
                </ul>
                <h1>{this.state.num}</h1>
                <button onClick={this.changeNumber}>Change number</button>
            </div>
        );
    }
}

export default CBCStateEx;

