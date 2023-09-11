import React, { useEffect, useState } from 'react';

const Searc = ({setCountries}) => {
    const [serach , setSearch]=useState('');
    const handleSearch=()=>{
        const searcvalue = document.getElementById('input-value').value;
            fetch(`https://restcountries.com/v3.1/alpha/${searcvalue}`)
            .then(res => res.json())
            .then(data=>setCountries(data))
       
           
        // setSearch()
        


    }
   
    return (
        <div>
            <div class="form-control ml-36">
  <div class="input-group">
    <input id='input-value' type="text" placeholder="Search Country Code" class="input input-bordered w-3/4" />
    <button onClick={handleSearch} class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
        </div>
    );
};

export default Searc;