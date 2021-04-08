import React from 'react';
import MapView from './MapView';

function ListAtlas(props){
  
  return(
    <main className="row">
      {props.country!=""&&<div className="col-lg-6 p-2">
            <h1>{props.country.name}</h1>
            <h3>Population: {props.country.population}</h3>
            <h3>Region: {props.country.region}</h3>
            <h3>Languages: {props.country.languages[0].name}</h3>
            <h3>Coin: {props.country.currencies[0].code}, {props.country.currencies[0].symbol}, {props.country.currencies[0].name}</h3>
            <h3>Capital: {props.country.capital}</h3>
            {/* <h3>States with borders: {(props.country.borders).map(item=>{
              return(
              <button className="btn btn-info" onClick={props.doApi(item)}>{item}</button>
              )
            })}</h3> */}
            <MapView loc1={props.country.latlng[0]} loc2={props.country.latlng[1]}/>
      </div>}
      
    </main> 
  )
}

export default ListAtlas;