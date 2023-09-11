import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import Searc from "./Searc";

const Contiries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedCountriesFlag, setCountriesFlag]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries =country =>{
        console.log('added visited countury');
        const newVisitedCountry = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountry)

    }

    const handleVisitedFlag =flag =>{
        const newVisitedFlag = [...visitedCountriesFlag , flag];
        setCountriesFlag(newVisitedFlag)

    }

    return (
        <div className=" container mx-auto mt-28 mb-28">
            <Searc setCountries = {setCountries}></Searc>
            <h3 className="mt-10 text-center font-semibold text-4xl">Countries:{countries.length}</h3>
            <h4 className="mt-10 text-center font-semibold text-4xl">Visited Countries: {visitedCountries.length} </h4>
            <div className="flex gap-2">
                {
                    visitedCountriesFlag.map(flag => <img className=" mt-4  w-12" src={flag}></img>)
                }
            </div>
            <ul>
                {
                    visitedCountries.map( country =>  <li className=" text-2xl text-orange-500 font-bold text-center">{country.name.common}</li>) 
                }
            </ul>
           <div className="grid grid-cols-3 ">
           {
                countries.slice(0,12).map(country =><Country key={country.cca3} country = {country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country> )
            }
           </div>
        </div>
    );
};

export default Contiries;