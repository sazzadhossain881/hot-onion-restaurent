import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Data from '../Data/Data';
import MenuItems from '../MenuItems/MenuItems';

const Menu = () => {
    const [foods, setFoods] = useState([]);
    const [selectedItem, setSelectedItem] = useState('lunch');
    const [items, setItems] = useState([]);

    useEffect(() => {
        setFoods(Data)
    }, [])

    useEffect(() => {
        const data = foods.filter(item => item.category === selectedItem)
        setItems(data)
    }, [selectedItem, foods])


    return (
        <div className>
            <Banner></Banner>
            <div className="catagories m-auto py-5">
                <ul className="d-flex justify-content-center">
                    <li>
                        <button
                            className={selectedItem === 'breakfast' ? 'active btn' : 'btn'}
                            onClick={() => setSelectedItem('breakfast')}
                        >
                            Breakfast
                            </button>
                    </li>

                    <li>
                        <button
                            className={selectedItem === 'lunch' ? 'active btn' : 'btn'}
                            onClick={() => setSelectedItem('lunch')}
                        >
                            Lunch
                            </button>
                    </li>

                    <li>
                        <button
                            className={selectedItem === 'dinner' ? 'active btn' : 'btn'}
                            onClick={() => setSelectedItem('dinner')}
                        >
                            Dinner
                            </button>
                    </li>
                </ul>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                {
                    items.map(item => <MenuItems item={item}></MenuItems>)
                }
            </div>

        </div>
    );

};
export default withRouter(Menu);