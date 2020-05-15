import React, { useState } from 'react';
import { Router } from '@reach/router';
import Form from './Form.js';
import People from './People.js';
import Planets from './Planets.js';
import Error from './Error.js';

const Wrapper = () => {

    const[input, setInput] = useState({
        page: "people",
        item: 0
    });
    const[data, setData] = useState({});
    const[world, setWorld] = useState("");

    return (
        <>
        <Form
            input={input}
            setInput={setInput}
            data={data}
            setData={setData}
        />
        <Router>
            <People path='/people/:id' data={data} setData={setData} world={world} setWorld={setWorld}/>
            <Planets path='/planets/:id' data={data} setData={setData}/>
            <Error path='/error' />
        </Router>
        </>
    )
}

export default Wrapper;