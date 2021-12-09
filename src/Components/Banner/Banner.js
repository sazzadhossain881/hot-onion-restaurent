import React from 'react';
import banner from '../../images/homepage/bannerbackground.png';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <div class="card bg-white text-black border-0">
                <img src={banner} class="card-img img-fluid" alt="..."></img>
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h3 class="card-title">Best food waiting for your belly</h3>
                    <div>
                        {/* <input style={{ width: '250px', borderRadius: '10px', border: 'none' }} type="text" /> */}
                        {/* <button type="button" class="btn btn-danger rounded-pill">Search</button> */}
                        <InputGroup style={{ borderRadius: "10px", width: "350px" }}>
                            <Input />
                            <InputGroupAddon addonType="append">
                                <InputGroupText style={{ backgroundColor: "red", color: "white", fontSize: "18px", borderRadius: "5px" }}>Search</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;