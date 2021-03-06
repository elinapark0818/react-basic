import React, {PureComponent} from 'react';

class Habit extends PureComponent {

    componentDidMount() {fffff
        console.log(`habit : ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() {
        console.log(`habit : ${this.props.habit.name} will Unmount`);
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const {name} = this.props.habit;
        const {count} = this.props;
        console.log(`habit : ${name}`);
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button 
                className="habit-button habit-increase" 
                onClick={this.handleIncrement}
                >
                    <i className="fas fa-plus-square"/>
                </button>
                <button 
                className="habit-button habit-decrease"
                onClick={this.handleDecrement}
                >
                    <i className="fas fa-minus-square"/>
                </button>
                <button 
                className="habit-button habit-delete"
                onClick={this.handleDelete}>
                    <i className="fas fa-trash"/>
                </button>
            </li>
        );
    }
}

export default Habit;