import React from 'react';
import { BsPlus, BsDash, BsX } from "react-icons/bs";
import { useDispatch } from 'react-redux';


const CartItems = (props) => {
    const dispatch = useDispatch();
    const formatNumber = num => {
        const precision = num.toFixed(3);
        return Number(precision);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={props.item.img} className="img-fluid w-75" alt="" />
                    </div>
                    <div className="col-md-2">
                        {props.item.itemName}
                    </div>
                    <div className="col-md-2">
                        {props.item.price}
                    </div>
                    <div className="col-md-2 d-flex flex-row">
                        <span className="dec" style={{ cursor: "pointer" }} onClick={() => dispatch({ type: 'DEC', payload: props.item.key })}><BsDash></BsDash></span>
                        <span className="quantity">{props.item.quantity}</span>
                        <span className="inc" style={{ cursor: "pointer" }} onClick={() => dispatch({ type: 'INC', payload: props.item.key })}><BsPlus></BsPlus></span>
                    </div>
                    <div className="col-md-2">
                        {formatNumber(props.item.price * props.item.quantity)}
                    </div>
                    <div className="col-md-2">
                        <span style={{ cursor: "pointer" }} onClick={() => dispatch({ type: 'REMOVE', payload: props.item.key })}><BsX></BsX></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;