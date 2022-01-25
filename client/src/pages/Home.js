import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from 'react-toastify';



function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        const response = await axios.get("https://8000-calaldees-frameworksandl-5q5xcwr6p5x.ws-eu28.gitpod.io/items");
        if (response.status === 200) {
            setData(response.data);
        }
    }
    async function onDeleteItem(id) {
        if (window.confirm("Would you like to delete this item ?")) {
            const response = await axios.delete(`https://8000-calaldees-frameworksandl-5q5xcwr6p5x.ws-eu28.gitpod.io/item/${id}`);
            if (response.status === 200) {
                //toast.success(response.data);
                toast.success("Item deleted!")
                getItems();
            }
        }
    }
    console.log("Item: ", data);
    return (
        <div style={{ marginTop: "150px" }}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>ID</th>
                        <th style={{ textAlign: "center" }}>User ID</th>
                        <th style={{ textAlign: "center" }}>Keywords</th>
                        <th style={{ textAlign: "center" }}>Description</th>
                        <th style={{ textAlign: "center" }}>Image</th>
                        <th style={{ textAlign: "center" }}>Latitude</th>
                        <th style={{ textAlign: "center" }}>Longitude</th>
                        <th style={{ textAlign: "center" }}>Date From</th>
                        <th style={{ textAlign: "center" }}>Date To</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.user_id}</td>
                                <td>{item.keywords}</td>
                                <td>{item.description}</td>
                                <td>{item.image}</td>
                                <td>{item.lat}</td>
                                <td>{item.lon}</td>
                                <td>{item.date_from}</td>
                                <td>{item.date_to}</td>
                                <td>
                                    <Link to={`/view/${item.id}`}>
                                        <button className='btn btn-view'>View</button>
                                    </Link>
                                    <button className='btn btn-delete' onClick={() => onDeleteItem(item.id)}>Delete Item</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Home