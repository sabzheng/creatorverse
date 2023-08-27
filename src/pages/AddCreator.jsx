import React, { useState, useEffect } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
    const [creator, setCreator] = useState( {name: "", description: "", url:""} )

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const addCreator = async (event) => {
        event.preventDefault()

       const { error } = await supabase
        .from('creators')
        .insert( {name: creator.name, description: creator.description, url:"" } )
        .select()

        if (error) {
            console.log(error)
        }

        window.location = "/"

    }

    return (
        <div className="AddEditCreator">

        <form id="addCreatorForm">
            <label>Name</label>
            <br/>
            <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />
            <br/>
            <label>
                Channel URL
                <p>Provide a link the creators channel. Be sure to include the http://</p>
            </label>
            <input type="text" id="url" name="url" value={creator.url} onChange={handleChange} required />
            <br/>
            <label>
                Description
                <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
            </label>
            <textarea name="description" rows="3" cols="50" id="description" value={creator.description} onChange={handleChange} required></textarea>
            
            <br/>
            <button type="submit" onClick={addCreator}>Submit</button>
        </form>

    </div>
    )
}

export default AddCreator;