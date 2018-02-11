import React, {Component} from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);

        console.info(props.users);
    }

    render() {
        const {users} = this.props;

        const getUsersItems = () => {
            return users.map(item => <li key={item.name}>{item.name}</li>);
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