import React /*, { useState }*/ from "react";
//import { Link } from 'react-router-dom';
import "./Ajouterplante.css";

function Supprimerplante() {
  return (
    <div className="registre">
    <form>

    <div className="textt">
        <h1>Supprimer plante</h1>
    </div>

    <div className="form-group">
        <input type="text" className="form-control paper" id="Nomdeplante" placeholder="Nom de produit"/>
    </div>




    <div className="form-group">
         <button type="submit" className="btn btn-block createcompte">Delete</button>
         <button type="reset" className="btn btn-block createcompte">Annuler</button>
       
         
    </div>
</form>
</div>

  );
}

export default Supprimerplante;
