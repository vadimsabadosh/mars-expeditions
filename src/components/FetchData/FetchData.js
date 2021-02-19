export default class FetchData {
    

    getData = async(rover, sol, page, camera) => {
    let startUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=${page}&camera=${camera}&api_key=DEMO_KEY`;
    const res = await fetch(startUrl);

    if(!res.ok){
        throw new Error(`Something went wrong with error: ${res.status}`);
    }

    return await res.json();
};

}
