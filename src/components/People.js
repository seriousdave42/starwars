import React, { useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const People = ({id, data, setData, world, setWorld}) => {

    useEffect (() => {
        axios.get("https://swapi.dev/api/people/"+id)
            .then(response => {
                setWorld(response.data.homeworld.substring(response.data.homeworld.lastIndexOf('/')-1));
                setData(response.data)
            })
            .catch(error => {handleReject()})
    }, [id, setData, setWorld]);

    const handleReject = () => {
        navigate("/error")
    }

    return (
        <div>
            <h3>{data.name}</h3>
            
            <ul style = {{width:"150px", margin:"0 auto"}}>
                <li>Height: {data.height} cm</li>
                <li>Mass: {data.mass} kg</li>
                <li>Hair Color: {data.hair_color}</li>
                <li>Eye Color: {data.eye_color}</li>
                <li>
                    <Link to={`/planets/${world}`}>Homeworld</Link>
                </li>
            </ul>
        </div>
    )
}

export default People;