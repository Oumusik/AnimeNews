import {useState, useEffect} from "react"
import React from "react";
import axios from "axios";
import AnimeList from "./components/AnimeList";

class App extends React.Component {
  

  render(){
    return (
      <div >
        <AnimeList />
      </div>
    );
  }
}

export default App;
