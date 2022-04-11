import {setState, setEffect, useState, useEffect} from "react";

import React from "react";
import axios from "axios";



const AnimeList = () =>{
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])


    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/anime?filter[categories]=adventure").then((result) =>{
            setResults(result.data)
        })
    },[term])


    


    return (
        <div className="ui container">
            <h1>{results.length}</h1>
        </div>
    )

}

export default AnimeList