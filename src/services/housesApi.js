const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    //GET: reads the houses
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            //turns resp into a json
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Ooops, looks like fetchhouses had an issue', e);
        }
    }
     
    //PUT: updates the house
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Ooops, looks like updating houses had an issue', e);
        }
    } 

    //POST: creates a new house
    createHouse = async (house) => {
        console.log(house)
        try {
            const response = await fetch(HOUSES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return response;
        }
        catch(e) {
            console.log(e) ;
            return null;
        }
    }

    //DELETE: deletes the house
    deleteHouse = async(house) => {
        try{
            const response = await fetch(`${HOUSES_ENDPOINT}/${house._id}`,  { method: "DELETE" });
            return response;
        }
        catch(e) {
            console.log(e);
            return null;
        }
    }

}

export const housesApi = new HousesApi();