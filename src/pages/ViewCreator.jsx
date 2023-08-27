import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link, useParams } from 'react-router-dom';

const ViewCreator = ({data}) => {
    const {id} = useParams()

    const [creator, setCreator] = useState({id: null, name: "", description: "", url: ""})

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0]
        setCreator({id: result.id, name: result.name, description: result.description, url: result.url})
    }, [data, id])
    

    const deleteCreator = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id) 

        if (error) {
            console.log(error);
        }

        window.location = "/"
    }
    const openURL = () => {
        window.open(creator.url);
      }


    return (
        <div className="ViewCreator">

            <h2>{creator.name}</h2>
            <p>{creator.description}</p>
            <Link to={'/edit/' + id}>edit 🖋</Link>
            <button onClick={openURL}>My Channel 📺</button>
            <button onClick={deleteCreator} >Delete ❌</button>

        </div>
    )
}

export default ViewCreator;