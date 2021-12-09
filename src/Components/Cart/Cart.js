import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../CartItems/CartItems';
import './Cart.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { menus, totalPrice, totalQuantities } = useSelector(state => state.cartReducers);
    console.log(menus);
    const formatNumber = num => {
        const precision = num.toFixed(3);
        return Number(precision);
    }
    return (
        <div className="cart">
            <div className="container">
                <h4>Your Cart </h4>
                {
                    menus.length > 0 ?
                        <div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="cart-header mb-3">
                                        <div className="row">
                                            <div className="col-md-2">Picture</div>
                                            <div className="col-md-2">Name</div>
                                            <div className="col-md-2">Price</div>
                                            <div className="col-md-2">Inc/Dec</div>
                                            <div className="col-md-2">TotalPrice</div>
                                            <div className="col-md-2">Remove</div>
                                        </div>
                                    </div>
                                    {
                                        menus.map(item => <CartItems key={item.key} item={item}></CartItems>)
                                    }
                                </div>
                                <div className="col-md-3">
                                    <div className="summary">
                                        Summary
                                    </div>
                                    <div className="summary-details">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Total Items:
                                            </div>
                                            <div className="col-md-6">
                                                {totalQuantities}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                Total Price:
                                                </div>
                                            <div className="col-md-6">
                                                {formatNumber(totalPrice)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Link to="/checkout"><Button style={{ width: "100%", color: "white", fontSize: "17px", cursor: "pointer" }} color="warning">Checkout</Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : 'Your cart is empty'
                }
            </div>
        </div >
    );
};

export default Cart;