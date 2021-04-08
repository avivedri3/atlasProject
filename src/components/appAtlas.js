import React, { useRef, useState } from 'react';
import ListAtlas from './listAtlas';

function AppAtlas(props){
let [country, setCountry] = useState("");
let name = useRef();  



  const doApi = ()=>{

    fetch("https://restcountries.eu/rest/v2/name/"+name.current.value).
    then(resp=> (resp.json())).
    then(data => {
      setCountry(data[0]);
      console.log(data[0]);
    })
  

  }

  return(
    <React.Fragment>
      <label>Country: </label>
      <input ref={name} type="text" placeholder="country..."/>
      <button onClick={doApi}>Search</button>
      <ListAtlas country={country} setCountry={setCountry}/>
    </React.Fragment>
  )
}

export default AppAtlas