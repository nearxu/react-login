import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends Component {
    render() {
        const { users } = this.props;
        console.log(users, 'users')
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 align="center">Welcome! You have successfully logged in.</h2>
                <div align="center">
                    {/*Add a redirection for logout*/}
                    <p>{users.username}</p>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.authentication.user
    }
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
