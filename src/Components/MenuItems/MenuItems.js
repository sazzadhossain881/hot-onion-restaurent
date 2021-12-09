import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const MenuItems = (props) => {
    const { img, itemName, description, price, key } = props.item;
    return (
        <Card style={{ textAlign: "center", width: "310px", height: "auto", marginTop: "10px", marginBottom: "10px", marginLeft: "120px", border: "none", marginRight: "5px" }}>
            <Link to={"/item/" + key}> <CardImg top width="100%" src={img} className="img-fluid w-100" alt="Card image cap" /></Link>
            <CardBody>
                <CardTitle tag="h5">{itemName}</CardTitle>
                <CardText>{description}</CardText>
                <CardText>${price}</CardText>
            </CardBody>
        </Card>
    );
};

export default withRouter(MenuItems);