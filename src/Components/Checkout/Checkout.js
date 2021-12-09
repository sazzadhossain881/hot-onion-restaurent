import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class Checkout extends Component {
    render() {
        return (
            <div className="container mt-5"
                style={{ border: "1px solid gray", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px" }}>
                <h1>Checkout coming soon....</h1>
            </div>
        );
    }
}

export default Checkout;