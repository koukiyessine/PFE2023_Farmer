import React /*, { useState }*/ from "react";
//import { Link } from 'react-router-dom';
import "./AjouterStock.css";

function Supprimerplante() {
  return (
    <div className="registration">
    <form>

    <div className="form-text">
        <h1>Supprimer plante</h1>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="iddeproduit" placeholder="id de produit"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="iddefournisseur" placeholder="id de fournisseur"/>
    </div>




    <div className="form-group">
         <button type="submit" className="btn btn-block create-account">Delete</button>
         <button type="reset" className="btn btn-block create-account">Annuler</button>
       
         
    </div>
</form>
</div>

  );
}

export default Supprimerplante;
