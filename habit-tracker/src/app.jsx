import { Component } from 'react';
import './app.css';
import Habits from "./habits";

class App extends Component {
    state = {
        habits: [
            { id : 1, name: 'Reading', count: 0},
            { id : 2, name: 'Running', count: 0},
            { id : 3, name: 'Coding', count: 0},
        ],
    };

    handleCreate = habit => {
        const { habits } = this.state;
        this.setState({ 
            habits: habits.concat({ id: this.id++, ...data}) });
    };

}

export default App;
