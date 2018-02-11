import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

class App extends Component {
    constructor(props) {
        super(props);

        this.updateSelectedUser = this.updateSelectedUser.bind(this);

        this.state = {
            users: [],
            selectedUser: null
        };

    }

    componentWillMount() {
    }

    componentDidMount() {
        // get data from server
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result)=> {
                this.setState({
                    users: result.data
                });
            })

    }

    componentWillUpdate() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        // decide whether or not to re-render this component
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillReceiveProps(nextProps) {
    }

    updateSelectedUser(user) {
        this.setState({
           selectedUser: user
        });
    }

    render() {
        const {users, selectedUser} = this.state;

        return (
            <div className="container">
                <div className="row section">
                    <div className="col-xs-3 section">
                        <UserList users={users} onUserSelected={this.updateSelectedUser}/>
                    </div>
                    <div className="col-xs-9 section">
                        <UserDetails user={selectedUser}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
