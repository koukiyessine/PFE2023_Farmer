import React /*, { useState }*/ from "react";
//import { Link } from 'react-router-dom';
import "./Ajouterplante.css";

function Miseajourplante() {
  return (
    <div className="registre">
    <form>

    <div className="textt">
        <h1> Update plante</h1>
    </div>

    <div className="form-group">
        <input type="text" className="form-control paper" id="Nomdeplante" placeholder="Nom de plante"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control paper" id="typedesol" placeholder="type de sol" />
    </div>

    <div className="form-group">
        <input type="Date" className="form-control paper" id="datedeplante" placeholder="date de plante " />
    </div>

    <div className="form-group">
        <input type="Date" className="form-control paper" id="niveaueau" placeholder="date de recette"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control paper" id="etatdesante" placeholder="etat de sante"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control paper" id="vitamine" placeholder="vitamine"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control paper" id="champ" placeholder="champ:nom/taille/ph"/>
    </div>


    <div className="form-group">
         <button type="submit" className="btn btn-block createcompte">Update</button>
         <button type="reset" className="btn btn-block createcompte">Annuler</button>
       
         
    </div>
</form>
</div>

  );
}

export default Miseajourplante;
