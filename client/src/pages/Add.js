import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import './Add.css';
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
        user_id: "",
        keywords: "",
        description: "",
        image: "",
        lat: "",
        lon: ""
}

function Add() {

    const [state, setState] = useState(initialState);
    const { user_id, keywords, description, image, lat, lon } = initialState;

    const history = useHistory();


    const addItem = async (data) => {
        const response = await axios.post('https://8000-calaldees-frameworksandl-5q5xcwr6p5x.ws-eu29.gitpod.io/item', data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if(!user_id || !keywords || !description || !image || !lat || !lon)
        {
            addItem(state);
            setTimeout(() => history.push("/"), 500);
            toast("Item Added Successfully")
            
        }
        /*
        else if (!user_id || !keywords || !description || !image || !lat || !lon){
            toast.error("Fill up all the boxes please")
        }*/
    };

    const handleInputChange = event => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    };


    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{
                margin: "auto",
                padding: "20px",
                maxWidth: "400px",
                alignContent: "center",
            }}
                onSubmit={handleSubmit}
            >
                <label htmlFor='user_id'> User ID </label>
                <input
                    type="text"
                    id="user_id"
                    name="user_id"
                    placeholder="Enter User ID"
                    onChange={handleInputChange}
                    defaultValue={user_id} />

                <label htmlFor='keywords'> Keywords </label>
                <input
                    type="text"
                    id='keywords'
                    name='keywords'
                    placeholder='Enter Keyword'
                    onChange={handleInputChange}
                    defaultValue={keywords} />

                <label htmlFor='description'> Description </label>
                <input
                    type="text"
                    id='description'
                    name='description'
                    placeholder='Enter Description'
                    onChange={handleInputChange}
                    defaultValue={description} />

                <label htmlFor='image'> Image </label>
                <input
                    type="img"
                    id='image'
                    name='image'
                    placeholder='Put an Image'
                    onChange={handleInputChange}
                    defaultValue={image} />

                <label htmlFor='lat'> Latitude </label>
                <input
                    type="int"
                    id='lat'
                    name='lat'
                    placeholder='Enter Latitude'
                    onChange={handleInputChange}
                    defaultValue={lat} />

                <label htmlFor='Lon'> Longitude </label>
                <input
                    type="int"
                    id='lon'
                    name='lon'
                    placeholder='Enter Longitude'
                    onChange={handleInputChange}
                    defaultValue={lon} />

                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
}
export default Add;