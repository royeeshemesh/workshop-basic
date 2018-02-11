import React, {Component} from 'react';
import './App.css';

import UserList from './components/UserList';
import UserDetails from './components/UserDetails';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [{
                name: 'royee',
                lastName: 'shemesh',
                address: {
                    city: 'jerusalem'
                },
                age: 36
            }, {
                name: 'shai',
                lastName: 'safra',
                address: {
                    city: 'tel aviv'
                }
            }, {
                name: 'mor',
                lastName: 'amit',
                address: {
                    city: 'kfar saba'
                }
            }]
        };
    }

    render() {
        const {users} = this.state;

        return (
            <div className="container">
                <div className="row section">
                    <div className="col-xs-3 section">
                        <UserList users={users}/>
                    </div>
                    <div className="col-xs-9 section">
                        <UserDetails/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
