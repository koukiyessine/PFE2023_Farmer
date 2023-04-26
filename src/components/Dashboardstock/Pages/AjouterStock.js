import React /*, { useState }*/ from "react";
//import { Link } from 'react-router-dom';
import "./AjouterStock.css";

function Ajouterplante() {
  return (
    <div className="registration">
    <form>

    <div className="form-text">
        <h1>Ajouter Stock</h1>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="Nomdeplante" placeholder="Nom de produit"/>
    </div>

    <div className="form-group">
        <input type="file" className="form-control item" id="image" />
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="referencedeproduit" placeholder="reference de produit " />
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="quantitedeproduittotal" placeholder="quantite  de produit total"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="iddeproduit" placeholder="id de produit"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="quantitedealerte" placeholder="quantite de alerte"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="iddefournisseur" placeholder="id de fournisseur"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control item" id="telfournisseur" placeholder="tel de fournisseur"/>
    </div>


    <div className="form-group">
         <button type="submit" className="btn btn-block create-account">Ajouter</button>
         <button type="reset" className="btn btn-block create-account">Annuler</button>
       
         
    </div>
</form>
</div>

  );
}

export default Ajouterplante;
