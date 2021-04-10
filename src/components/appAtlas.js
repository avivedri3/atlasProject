import React, { useRef, useState } from 'react';
import ListAtlas from './listAtlas';

function AppAtlas(props){
let [country, setCountry] = useState("");
let name = useRef("");  



  const doApi = ()=>{
    fetch("https://restcountries.eu/rest/v2/name/"+name.current.value).
    then(resp=> (resp.json())).
    then(data => {
      setCountry(data[0]);
      console.log(data[0]);
    })

  }

  const doApiName = (_name)=>{
    fetch("https://restcountries.eu/rest/v2/name/"+_name).
    then(resp=> (resp.json())).
    then(data => {
      setCountry(data[0]);
      console.log(data[0]);
    })
  }
  const doApiCode = (_code)=>{
    fetch("https://restcountries.eu/rest/v2/alpha/"+_code).
    then(resp=> (resp.json())).
    then(data => {
      setCountry(data);
      console.log(data);
    })
  }
  
  const searchEnter = (e) => {
    if(e.key === 'Enter'){
      doApi();
    }
  }

  return(
    <React.Fragment>
      <button onClick={()=>{
        doApiName("Usa")
      }}>Usa</button>
      <button onClick={()=>{
        doApiName("Israel")
      }}>Israel</button>
      <button onClick={()=>{
        doApiName("United kingdom")
      }}>Uk</button>
      <button onClick={()=>{
        doApiName("France")
      }}>France</button>
      <button onClick={()=>{
        doApiName("Thailand")
      }}>Thailand</button>

      <label>Country: </label>
      <input ref={name} type="text" placeholder="country..." onKeyUp={searchEnter}/>
      <button className="btn btn-info ms-2" onClick={doApi}>Search</button>
      <ListAtlas country={country} setCountry={setCountry} name={name.current.value} doApiCode={doApiCode}/>
    </React.Fragment>
  )
}

export default AppAtlas