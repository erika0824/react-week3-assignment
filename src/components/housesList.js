import React from 'react';
import { House } from './house.js';
import { housesApi } from '../services/housesApi.js';
import NewHouseForm from './NewHouseForm';

export class HousesList extends React.Component {
    state = {
        houses: []
    };
    
    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses =  await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    addHouse = async (house) => {
        await housesApi.createHouse(house);
        console.log(house)
        this.fetchHouses();
    }

    handleDeleteHouse = async (house) => {
        await housesApi.deleteHouse(house);
        this.fetchHouses();
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <NewHouseForm addHouse={this.addHouse} houses={this.state.houses}/>
                        {this.state.houses.map((house) => (
                        <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        deleteHouse={this.handleDeleteHouse}
                    />
                    ))}
                    </div>
                </div>
            </div>
          
        )
    }
}
