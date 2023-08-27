/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';


const ShowCreators = (props) => {

    const [creators, setCreators] = useState([])

    useEffect(() => {
        setCreators(props.data)
    }, [props]);

    return (
        <div>
        {
            creators && creators.length > 0 ?
            creators.map((creator) => 
            <Card key={creator.id} id={creator.id} name={creator.name} description={creator.description} url={creator.url}/>
            ) : <h3>{'No Creators Yet 😞'}</h3>

        }
        </div>
    )
}

export default ShowCreators;