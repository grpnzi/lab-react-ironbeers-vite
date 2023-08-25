import { Link } from 'react-router-dom'
import beersImage from './../assets/beers.png';
import randomBeerImage from './../assets/random-beer.png';
import newBeerImage from './../assets/new-beer.png';
import "./HomePage.css";

function HomePage() {
    return (
        <div className="Home">
            <div className="card">
                <img src={beersImage} alt="AllBeers" />
                <Link to={'/beers'}> <h1>All beers</h1> </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia voluptas sapiente eum maiores nemo eaque? Unde, maxime
                    adipisci rem beatae autem aspernatur dolore odio? Deserunt
                    iusto pariatur praesentium vero? Est.</p>
            </div>
            <div className="card">
                <img src={randomBeerImage} alt="RandomBeer" />
                <Link to={'/random-beer'}> <h1>Random beer</h1> </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia voluptas sapiente eum maiores nemo eaque? Unde, maxime
                    adipisci rem beatae autem aspernatur dolore odio? Deserunt
                    iusto pariatur praesentium vero? Est.</p>
            </div>
            <div className="card">
                <img src={newBeerImage} alt="AddBeer" />
                <Link to={'/new-beer'}> <h1>Add beer</h1> </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia voluptas sapiente eum maiores nemo eaque? Unde, maxime
                    adipisci rem beatae autem aspernatur dolore odio? Deserunt
                    iusto pariatur praesentium vero? Est.</p>
            </div>
        </div>
    )
}

export default HomePage;
