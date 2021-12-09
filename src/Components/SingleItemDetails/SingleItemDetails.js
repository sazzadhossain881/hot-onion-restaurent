import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { BsPlus, BsDash } from "react-icons/bs";
import './SingleItemDetails.css'


const SingleItemDetails = () => {
    const { itemKey } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { menu } = useSelector(state => state.reducers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'MENU', itemKey })
    }, [itemKey, dispatch])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-100">
                        <div className="col-12">
                            <h2>{menu.itemName}</h2>
                        </div>
                        <div className="col-12">
                            {menu.desc}
                        </div>
                        <div className="col-12 d-flex flex-row mb-3 mt-2 ml-3">
                            <h3 style={{ marginRight: "10px" }}>${menu.price}</h3>
                            <div className="dec" onClick={decQuantity}><BsDash></BsDash></div>
                            <div className="quantity">{quantity}</div>
                            <div className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus></BsPlus></div>
                        </div>
                        <div className="col-12">
                            <Button color="danger"
                                style={{ color: "white", fontSize: '16px', borderRadius: "10px" }}
                                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { menu, quantity } })}>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add
                                </Button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <img src={menu.img} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItemDetails;