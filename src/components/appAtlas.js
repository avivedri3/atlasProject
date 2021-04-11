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
        <h2>WORLD MAP</h2>
    <nav>
      <button className=" ms-2 btn btn-light" onClick={()=>{
        doApiName("Usa")
      }}>Usa</button>
      <button className="btn btn-light" onClick={()=>{
        doApiName("Israel")
      }}>Israel</button>
      <button className="btn btn-light" onClick={()=>{
        doApiName("United kingdom")
      }}>Uk</button>
      <button className="btn btn-light" onClick={()=>{
        doApiName("France")
      }}>France</button>
      <button className="btn btn-light" onClick={()=>{
        doApiName("Thailand")
      }}>Thailand</button>
      </nav>
      </header>
      <div className="barS d-flex align-items-center">
      <label className="ms-2">Country: </label>
      <div className="search">
      <input className="ms-2 p-1" ref={name} type="text" placeholder="Search..." onKeyUp={searchEnter}/>
      <button onClick={doApi}><i className="fa fa-globe" aria-hidden="true"></i></button>
      </div>
      </div>
      
      {/* className=" btn btn-warning ms-2 p-2" onClick={doApi}>Search */}
      <ListAtlas country={country} setCountry={setCountry} name={name.current.value} doApiCode={doApiCode}/>
    </React.Fragment>
  )
}

export default AppAtlas