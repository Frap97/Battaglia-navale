import React from 'react';
import '../style/profile.css'
import { Link } from "react-router-dom";
import Header from '../components/Header';

function Opzioni() {
  return (
    <div className="containerProfile">
      <div className="profile flex">
      <Link to="/"><Header title= "Battaglia Navale" /> </Link> 
      </div>
      
      <form action="#" method="post">
      <p className="profile">Imposta la difficoltà</p>
        <label for="facile"className="profile">Facile</label>
        <input type="radio" name="facile" id="newUsername" value="facile" checked="checked" />
        <label for="media" className="profile">Media</label>
        <input type="radio" name="media" id="newUsername" value="media" />
        <label for="difficile" className="profile">Difficile</label>
        <input type="radio" name="difficile" id="newUsername" value="difficile" /><br />
        <input type="submit" name="update" style={{marginTop: '1rem'}} value="Aggiorna" />
      </form>
    </div>
  );
}

export default Opzioni;