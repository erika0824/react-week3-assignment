import React from 'react';
import { NewRoomForm } from './newRoomForm.js';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            //copy house object from the prop above 
            ...house, 
            //copy of an array that filters through all elements that do not have the roomId
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        //calls the put method on the houses api
        updateHouse(updatedHouse);
    }

   const addNewRoom = (room) =>  {
       //copies the house object then copies the house.rooms array and adds a room to it
     return updateHouse( {...house, rooms: [...house.rooms, room]} );
   }
   
    const rooms = (room) => (
    
         <ul>
             {house.rooms.map((room, index) => (
                 <li key={index}>
                     <label> {`${room.name} - square ft: ${room.area} `}</label>
                     <button className="deleteButton" onClick={(e) => deleteRoom(room._id)}>DELETE</button>
                 </li>
             ))}
        </ul>
    );


    return (
        <div className="housesDiv">
            <h1>{house.name}</h1>
               {
                rooms({rooms, houseId: house._id, deleteRoom})
                }
            <NewRoomForm addNewRoom={addNewRoom}/>
            <button className="deleteButton" onClick={(e) => props.deleteHouse(house)}>DELETE HOUSE</button>
        </div>
    )
};