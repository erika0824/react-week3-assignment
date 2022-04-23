import React, { useState } from 'react';

export default function NewHouseForm ({ addHouse }) {
    const [house, setHouse] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addHouse( {name: house} );
        setHouse('');
    };

    return(
        <div className='house-form'>
        <h4>ADD A NEW HOUSE</h4>
        <form onSubmit={onSubmit}>
            <input
             type='text'
             placeholder='new house'
             onChange={(e) => setHouse(e.target.value)}
             value={house}
            />
             <button className="button" type='submit'>Add House</button>
        </form>
    </div> 
    )
}