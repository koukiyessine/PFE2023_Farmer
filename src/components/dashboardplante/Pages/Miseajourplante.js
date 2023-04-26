import React /*, { useState }*/ from "react";
//import { Link } from 'react-router-dom';
import "./Ajouterplante.css";

function Miseajourplante() {
  return (
    <div className="registration">
    <form>

    <div className="form-text">
        <h1> Update plante</h1>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="Nomdeplante" placeholder="Nom de plante"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="typedesol" placeholder="type de sol" />
    </div>

    <div className="form-group">
        <input type="Date" className="form-control item" id="datedeplante" placeholder="date de plante " />
    </div>

    <div className="form-group">
        <input type="Date" className="form-control item" id="niveaueau" placeholder="date de recette"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="etatdesante" placeholder="etat de sante"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="vitamine" placeholder="vitamine"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="champ" placeholder="champ:nom/taille/ph"/>
    </div>


    <div className="form-group">
         <button type="submit" className="btn btn-block create-account">Update</button>
         <button type="reset" className="btn btn-block create-account">Annuler</button>
       
         
    </div>
</form>
</div>

  );
}

export default Miseajourplante;
