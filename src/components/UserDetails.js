import React, {Component} from 'react';

class UserDetails extends Component {
    render() {
        const getUserInfo = () => {
            const {user} = this.props;
            if (!user) {
                return (
                    <div>
                        <span>please select user from the list</span>
                    </div>
                );
            }

            return (
                <div>
                    <div>
                        <label>First Name: </label>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <label>Username: </label>
                        <span>{user.username}</span>
                    </div>
                    <div>
                        <label>ID: </label>
                        <span>{user.id}</span>
                    </div>
                </div>
            )
        };

        return (
            <div>
                <h1>User Details</h1>
                <hr/>
                {getUserInfo()}
            </div>
        );
    }
}

export default UserDetails;