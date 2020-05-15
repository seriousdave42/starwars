import React, { useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Planets = ({id, data, setData}) => {

    useEffect (() => {
        axios.get("https://swapi.dev/api/planets/"+id)
            .then(response => {setData(response.data)})
            .catch(error => {handleReject()})
    }, [id, setData]);

    const handleReject = () => {
        navigate("/error")
    }
    
    return (
        <div>
            <h3>{data.name}</h3>
            <ul style = {{width:"200px", margin:"0 auto"}}>
                <li>Climate: {data.climate}</li>
                <li>Terrain: {data.terrain}</li>
                <li>Population: {data.population}</li>
                <li>Day Length: {data.rotation_period} hr</li>
            </ul>
        </div>
    )
}

export default Planets;