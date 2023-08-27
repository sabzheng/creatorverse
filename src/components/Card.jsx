import { Link } from 'react-router-dom';
import { supabase } from '../client';

const Card = (props) =>  {

  const deleteCreator = async (event) => {
    event.preventDefault();
    const { error } = await supabase
    .from('creators')
    .delete()
    .eq('id', props.id) 

    if (error) {
        console.log(error);
    }

    window.location = "/"
}

const openURL = async (event) => {
  event.preventDefault();
  window.open(props.url);
}
  
    return (
        
      <div className="Card">
  
        <article>
  
          <div className='card-heading'>
            <h3>{props.name}</h3>
            <button onClick={openURL}>My Channel 📺</button>
            <button onClick={deleteCreator} >Delete ❌</button>
          </div>
          <div>
            <p>{props.description}</p>
          </div>
  
          <div>
            <Link to={'/' + props.id}>more 👀 </Link>
            <Link to={'/edit/' + props.id}>edit 🖋</Link>
          </div>
          
          
        </article>
   
      </div>
  
    )
  }
  
export default Card;