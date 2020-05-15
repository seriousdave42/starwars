
import React from 'react';
import { navigate } from '@reach/router';

const Form = ({input, setInput}) => {

    const handleChange = e => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        navigate("/"+input.page+"/"+input.item)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search For:</label>
                <select name="page" onChange={handleChange}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID:</label>
                <input type="number" name="item" value={input.item} onChange={handleChange}></input>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default Form;