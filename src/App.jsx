import { useState, useEffect } from 'react';
import {  useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';
import { supabase } from './client';

import './App.css'

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    
    const fetchCreators = async () => {
      const {data} = await supabase
      .from('creators')
      .select()
      .order('created_at', { ascending: true })

      setCreators(data)
    }

    fetchCreators()
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators data={creators} />
    },
    {
      path: "/edit/:id",
      element: <EditCreator data={creators} />
    },
    {
      path: "/new",
      element: <AddCreator />
    },
    {
      path: "/:id",
      element: <ViewCreator data={creators} />
    }
  ]);
  

  return (
    <div className='App'>
      <nav>
          <ul className='navbar'>
            <li><a href="/" >View All Creators</a></li>
            <li><a href="/new">Add a Creator</a></li>
          </ul>
        </nav>
      
      <div>{element}</div>
    </div>
  );
}

export default App;

