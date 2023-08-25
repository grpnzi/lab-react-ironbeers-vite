import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBeerPage() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setbBrewersTips] = useState('');
    const [attenuation_level, setAttenuationLevel] = useState('');
    const [contributed_by, setContributedBy] = useState('');
    const navigate = useNavigate()

    const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new';

    function handleSubmit(event) {

        event.preventDefault();

        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log("data: ", data);
            setName("");
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setbBrewersTips('');
            setAttenuationLevel('');
            setContributedBy('');

            navigate("/")
        })
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <h2>Add a New Beer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="tagline">Tagline</label>
                <input
                    type="text"
                    id="tagline"
                    name="tagline"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="first_brewed">First Brewed</label>
                <input
                    type="text"
                    id="first_brewed"
                    name="first_brewed"
                    value={first_brewed}
                    onChange={(e) => setFirstBrewed(e.target.value)}
                />

                <label htmlFor="brewers_tips">Brewer's Tips</label>
                <input
                    type="text"
                    id="brewers_tips"
                    name="brewers_tips"
                    value={brewers_tips}
                    onChange={(e) => setbBrewersTips(e.target.value)}
                />

                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input
                    type="number"
                    id="attenuation_level"
                    name="attenuation_level"
                    value={attenuation_level}
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                />

                <label htmlFor="contributed_by">Contributed By</label>
                <input
                    type="text"
                    id="contributed_by"
                    name="contributed_by"
                    value={contributed_by}
                    onChange={(e) => setContributedBy(e.target.value)}
                />

                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;