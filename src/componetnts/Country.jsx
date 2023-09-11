import React, { useState } from 'react';

const Country = ({country,handleVisitedCountries, handleVisitedFlag}) => {
    const {name, flags,population, languages,area,cca3
    } = country;


    const [Visited, setvisited] = useState(false);
    const handleVisited=()=>{
        setvisited(!Visited)
    }

    // console.log(handleVisitedCountries);
    return (
        <div className=''>
           

           <div className={`card w-96  bg-base-100 shadow-xl mt-5 ${Visited?  'bg-orange-200': 'bg-green-300'}` }>
  <figure className="px-10 pt-10">
    <img src={flags.png} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name.common}</h2>
    <p>Population: {population}</p>
    <p>Area:{area}km <sup>2</sup></p>
    <p>Code:{cca3}</p>
    
    <div className="card-actions">
        <button onClick={() => handleVisitedCountries(country)} className='btn btn-warning'>Mark Visited</button>
        <button onClick={() => handleVisitedFlag(country.flags.png)} className='btn btn-warning'>Added Flag</button>
      <button onClick={handleVisited} className={`btn btn-warning ${Visited && 'bg-pink-200'}`}>{Visited? 'Visited':'Going'}</button> 
     
    </div>
  </div>
</div>


        </div>
    );
};

export default Country;