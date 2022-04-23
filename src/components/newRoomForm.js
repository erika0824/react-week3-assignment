import React, { useState } from 'react';


export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(0);

    const handleAreaInput = (e) => {
        //makes sure that the input is a number
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        //default submit action does not occur
        e.preventDefault();
        if(name && area) {
            props.addNewRoom( {name, area} );
            setName('');
            setArea('');
        } else {
            //if name || area are falsy
            (console.log('invalid input'));
        }
    };

    return (
       <div>
           <h4>Add a new room</h4>
           <form onSubmit={onSubmit}>
               <input
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
               />
               <input
                type='text'
                placeholder='area'
                onChange={handleAreaInput}
                value={area}
                />
                <button className="button" type='submit'>Add Room</button>
           </form>
       </div> 
    )
};
