import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const addUser=props.addUser;
    const totalSalary=addUser.reduce((sum,totalSalary)=>sum+totalSalary.salary,0)
    const tax =Math.round(totalSalary/100);
    return (
        <div className="addUsersCart">
            <h1>User Details</h1>
            <h1>total User :{addUser.length}</h1>
            <h1>salary :{totalSalary}</h1>
            <h1>Tax & Vat :{tax}</h1>
            
        </div>
    );
};

export default Cart;