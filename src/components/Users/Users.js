import React from 'react';
import './Users.css';
const Users = (props) => {
    const user=props.user;
    return (
        <div>
            <div>
                <h1>total user:</h1>
                <p> Name:{user.name}</p>
                <p> Country :{user.country}</p>
                <p>Job: {user.job}</p>
                <p> Salary :${user.salary}</p>
                <p>phone :{user.phone}</p>
                <p>{user.email}</p>
            </div>
            <div className="userImg">
                <img src={user.img} alt=""/>
                <button onClick={()=>props.handleAddUser(user)}>Add User </button>
            </div>
        </div>
    );
};

export default Users;