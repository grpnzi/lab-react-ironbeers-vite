import { useEffect, useState } from 'react';

function RandomBeersPage() {
    const [beer, setBeer] = useState('');
    const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/random`

    useEffect(() => {

        fetch(apiUrl)
            .then((res) => {
               return res.json()
            })
            .then((data) => {
                console.log(data);
                return setBeer(data)
            })
            .catch((err) => console.log(err))

    }, []);

    if (!beer) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <img src={beer.image_url} alt={beer.name} height="350px"/>
            <h1>{beer.name}</h1> <h1>{beer.attenuation_level}</h1>
            <h3>{beer.tagline}</h3><h3>{beer.first_brewed}</h3>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default RandomBeersPage;
