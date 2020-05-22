  
import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from './Pizza.jpg';

export default function Home() {

    return(
        <>
            <div>

                
                <div className='homeDiv'>
                    <h2 className='homeH2'>Franny Patty Pizza's</h2>
                    <button className='homeButton'>

                                {/* link to order form */}
                        <Link to='/pizza'>Make Pizza</Link> 

                    </button>
                    <img className='pizza-img' src={Pizza} alt='Fresh baked pizza'/>
                </div>
            </div>
        </>
    );


}