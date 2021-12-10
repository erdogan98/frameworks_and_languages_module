import { useState } from "react";
import ReactDOM from 'react-dom';


function Client_form() {
    const [input, setInput] = useState({});

    const EnterItem = (event) => {
        const username = event.target.username;
        const rest = event.target.rest;

        setInput(restI => ({...restI, [username]: rest}))
    }

    const SubmitItem = (event) => {
        event.preventDefault();
        alert(input);
    }

    return(
       <form onSubmit={SubmitItem}>
                  <h1> 🤯FreeCycle</h1>
            <label>Enter Username:
                <input
                type="text"
                name="username"
                defaultValue={input.username || ""}
                onChange= {EnterItem}
                />
            </label>
            <label>LAT
            <input
                type="int"
                name="latitude"
                defaultValue={input.latitude || ""}
                onChange= {EnterItem}
                />
            </label>
            <label>LON
            <input
                type="int"
                name="longitude"
                defaultValue={input.longitude || ""}
                onChange= {EnterItem}
                />
            </label>
            <label>Image
            <input
                type="website"
                name="Image"
                defaultValue={input.image || ""}
                onChange= {EnterItem}
                />
            </label>
            <label>Keywords
            <input
                type="text"
                name="keywords"
                defaultValue={input.keywords || ""}
                onChange= {EnterItem}
                />
            </label>
            <label>Description
            <input
                type="text"
                name="description"
                defaultValue={input.description || ""}
                onChange= {EnterItem}
                />
            </label>
            <input type="submit" />
        </form>
    )
}
export default Client_form;
ReactDOM.render(<Client_form />, document.getElementById('root'));
