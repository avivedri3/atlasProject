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
      <header>
        <h2 className="display-1">Atlas</h2>
    
      <button className=" ms-2 btn btn-info" onClick={()=>{
        doApiName("Usa")
      }}>Usa</button>
      <button className="btn btn-info" onClick={()=>{
        doApiName("Israel")
      }}>Israel</button>
      <button className="btn btn-info" onClick={()=>{
        doApiName("United kingdom")
      }}>Uk</button>
      <button className="btn btn-info" onClick={()=>{
        doApiName("France")
      }}>France</button>
      <button className="btn btn-info" onClick={()=>{
        doApiName("Thailand")
      }}>Thailand</button>
      </header>

      <label className="ms-2">Country: </label>
      <input className="ms-2 p-1 mt-3" ref={name} type="text" placeholder="country..." onKeyUp={searchEnter}/>
      <button className=" btn btn-warning ms-2 p-2" onClick={doApi}>Search</button>
      <ListAtlas country={country} setCountry={setCountry} name={name.current.value} doApiCode={doApiCode}/>
    </React.Fragment>
  )
}

export default AppAtlas