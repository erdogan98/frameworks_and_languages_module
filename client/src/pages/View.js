import React, {useEffect, useState}from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import './View.css';


const View = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            getSingleItem(id);
        }
    }, [id]);

    const getSingleItem = async (id) => {
        const response = await axios.get(`https://8000-calaldees-frameworksandl-5q5xcwr6p5x.ws-eu28.gitpod.io/item/${id}`)
        if (response.status === 200 ) {
            setItem({...response.data[0]})
        }
    }
    return (
        <div style={{marginTop: "150px"}}>
            <div className='item'>
                <div className="item-header">
                    <p>Item Details</p>
                </div>
                <div className='box'>
                    <strong>ID: </strong>
                    <strong>{item.id}</strong>
                    <br>
                    </br>
                </div>
            </div>
        </div>
    );
};

export default View;