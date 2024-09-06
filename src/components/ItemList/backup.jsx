import { useState, useEffect } from "react";

import Card from "../Card"; 

const ItemList = ({}) => {
    let [ items, setItems ] = useState([]);
    
    useEffect(() => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);

    return (
        <section className="trend-products">
            <div className="trend-info">
                <div className="season font-90">S/S</div>
                <div className="year font-90">24</div>
                <div className="btn-container">
                    <a href="./pages/store.html">VIEW ALL</a>
                </div>
            </div>
            <div className="cards-cont">
                {items.slice(0, 4).map(item => <Card {...item} />)}
            </div>
        </section>
    );
};

export default ItemList;