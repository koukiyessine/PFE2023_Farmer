import React /*, { useState }*/ from "react";
//import { Link } from 'react-router-dom';
import "./Rapportplante.css";

function Rapport() {
  return (
    <div className="registration">
    <form>
    <div className="form-text">
        <h1>Rapport</h1>
    </div>
    <div className="form-group">
        <input type="text" className="form-control item" id="Nomdeplante" placeholder="Nom de plante"/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control item" id="etatdesante" placeholder="etat de sante" />
    </div>
    <div className="form-group">
        <input type="text" className="form-control item" id="typedesol" placeholder="type de sol " />
    </div>
    <div className="form-group">
        <input type="text" className="form-control item" id="niveaueau" placeholder="niveau d'eau"/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control item" id="humidite" placeholder="humidite °"/>
    </div>
    <div className="form-group">
        <input type="date" className="form-control item" id="date" placeholder="date"/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control item" id="temperature" placeholder="temperature °"/>
    </div>
    <div className="form-group">
    <textarea
              id="description"
              className="form-control item"
              placeholder="description "
              style={{  height: "135px" }}
              
            />
    </div>

    <div className="form-group">
         <button type="reset" className="btn btn-block create-account">Annuler</button>
       <button type="submit" className="btn btn-block create-account">envoyer</button>
         
    </div>
</form>
</div>

  );
}

export default Rapport;
