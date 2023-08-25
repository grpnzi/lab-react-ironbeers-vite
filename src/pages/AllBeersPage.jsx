import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./AllBeersPage.css";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);
    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';

    useEffect(() => {

        fetch(apiUrl)
            .then((res) => {
               return res.json()
            })
            .then((data) => {
                console.log(data);
                return setBeers(data)
            })
            .catch((err) => console.log(err))

    }, []);

    if (!beers) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {beers.map((beer) => (
                <Link to={`/beers/${beer._id}`} key={beer._id}>
                    <div className='beer-card'>
                        <img src={beer.image_url} alt={beer.name} height="200px" />
                        <div className='beer-info'>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p><strong>Created by: </strong>{beer.tagline}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllBeersPage;
