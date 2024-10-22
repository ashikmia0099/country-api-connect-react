import { useState } from "react";


const Country = ({country,HandelVisitedCountry}) => {

    const {name, flags, population, area, cca3} = country
    console.log(country);

    const [Visited, setVisited] = useState(false);

    const handelVisited = () =>{
        setVisited(!Visited)
    } 

    const teamStyle = {

        border: '3px solid white',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
        
    };
   
    return (
        <div style={teamStyle}>
            <h4>Name: {name.common} </h4>
            <img src={flags.png} alt="" className="flagCss" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Population: {cca3} </p>
            <button onClick={() => HandelVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={handelVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited && 'I have visited'}
            
        </div>
    );
};

export default Country;