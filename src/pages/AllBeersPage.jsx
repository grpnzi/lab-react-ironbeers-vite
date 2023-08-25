import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./AllBeersPage.css";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState("");
    const [beersCopy, setbeersCopy] = useState("");
    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';
    const apiUrlSearch = `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`;

    useEffect(() => {

        fetch(apiUrl)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setbeersCopy(data)
                return setBeers(data)
            })
            .catch((err) => console.log(err))

    }, [setQuery]);


    // const handleSelect = (e) => {
    //     setQuery(e.target.value);

    //     fetch(apiUrlSearch)
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             return setBeers(data)
    //         })
    //         .catch((err) => console.log(err))
    // };

    if (beers.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className='search'>
                <label htmlFor="searchBar">Search</label>
                <input type="text" value={query} placeholder="Search.." onChange={handleSelect} name='searchBar'></input>
            </div>
            {beers.map((beer) => (
                <Link to={`/beers/${beer._id}`} key={beer._id}>
                    <div className='beer-card'>
                        <img src={beer.image_url} alt={beer.name} height="200px" />
                        <div className='beer-info'>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p><strong>Created by: </strong>{beer.name}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllBeersPage;
