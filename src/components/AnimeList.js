import {setState, setEffect, useState, useEffect} from "react";

import React from "react";
import axios from "axios";





const AnimeList = () =>{
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])


    useEffect(() => {

        axios.get(`https://api.aniapi.com/v1/anime?title=${term}`, {
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1ODUiLCJuYmYiOjE2NDk2ODE0NTcsImV4cCI6MTY1MjI3MzQ1NywiaWF0IjoxNjQ5NjgxNDU3fQ.JCE3Z29TGLLIzdDVF0V2kr4bMQNFwgI_qGnd3Gm1t9U',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) =>{
            setResults(result.data.data.documents)
        })
    },[term])

    const renderedResults = results.map(result =>{
        if(result.titles.en){
            return( 
                <div className="ui segment">
                    <li key={result.anilist_id}>
                        <b>{result.titles.en}</b>
                        <br/>
                        <img src={result.cover_image}/>
                        <br/>
                        <a href={result.trailer_url}>Trailer</a>
                    </li>
                </div>)
        }
        
            return( 
                <div className="ui segment">
                    <li key={result.anilist_id}>
                        <b>{result.titles.rj}</b>
                        <br/>
                        <img src={result.cover_image}/>
                        <br/>
                        <a className="right" href={result.trailer_url}>Trailer</a>
                    </li> 
                </div> 
            )
        
    })
    


    return (
        <div className="ui container">
                    <div className="ui form">
                        <div className="field">
                            <label>Wpisz Anime Title</label>
                            <input type="text" className="input" onChange={e => setTerm(e.target.value)} value={term}/>
                        </div>
                    </div>
                <b>{renderedResults}</b> 
            </div>
    )

}

export default AnimeList