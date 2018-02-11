import React, {Component} from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.info('componentWillMount');
    }

    componentDidMount() {
        console.info('componentDidMount');
    }

    componentWillUpdate() {
        console.info('componentWillUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.info('shouldComponentUpdate');
        // decide whether or not to re-render this component
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.info('componentDidUpdate');
    }

    componentWillReceiveProps(nextProps) {
        console.info('componentWillReceiveProps');
    }

    render() {
        console.info('render');
        const {users, onUserSelected} = this.props;

        const getUsersItems = () => {
            return users.map(item => <li onClick={()=>onUserSelected(item)} key={item.name}>{item.name}</li>);
        };

        return (
            <div>
                <h2>User List</h2>
                <hr/>
                <ul className="user-list">
                    {getUsersItems()}
                </ul>
            </div>
        );
    }
}

export default UserList;