import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {


    const [countryes, useCountry] = useState([]);
    const [visitedCountryes, setVisitedCountry] = useState([]);

    useEffect (() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => useCountry(data))
    }, [])

    const textcenter = {

       
        margin: '50px',
        
        
    };

    const HandelVisitedCountry = country => {
        
        console.log(country)
        const newVisitedCountry = [...visitedCountryes, country];
        setVisitedCountry(newVisitedCountry);

    }

    return (
        <div style={textcenter}>
            <h2>Coutries: {countryes.length} </h2>
            <h2>Visited Country List : {visitedCountryes.length} </h2>
            <ul>
                {
                    visitedCountryes.map(country => <li key={country.cca3}> {country.name.common} </li>)
                }
            </ul>
            
            <div className="countryCss">
            {countryes.map(country => <Country country={country}
            HandelVisitedCountry = {HandelVisitedCountry} 
            key={country.cca3}>
            </Country>)}
            </div>
            
        </div>
    );
};

export default Countries;