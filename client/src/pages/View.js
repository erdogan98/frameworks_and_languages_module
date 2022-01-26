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
        const response = await axios.get(`https://localhost:8000/item/${id}`)
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
                    <span>{id}</span>
                    <br />
                    <br />
                    <strong>User ID: </strong>
                    <span>{item && item.user_id}</span>
                    <br />
                    <br />
                    <strong>Keyword: </strong>
                    <span>{item && item.keywords}</span>
                    <br />
                    <br />
                    <strong>Description: </strong>
                    <span>{item && item.description}</span>
                    <br />
                    <br />
                    <strong>Image: </strong>
                    <span>{item && item.image}</span>
                    <br />
                    <br />
                    <strong>Latitude: </strong>
                    <span>{item && item.lat}</span>
                    <br />
                    <br />
                    <strong>Longitude </strong>
                    <span>{item && item.lon}</span>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default View;