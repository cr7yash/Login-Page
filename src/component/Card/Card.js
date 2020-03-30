import React from 'react';

import './Card.css';

const card = (props) => (
    <div className="Card">
        <ul>
            <p>Account ID: {props.accountId }</p>
            <li>First Name: {props.firstName }</li>
            <li>Last Name: {props.lastName}</li>
            <li>Age: {props.age}</li>
        </ul>
    </div>
);

export default card;