import React  from "react";
import "./Rapportstock.css";

function Rapport() {
  return (
    <div className="registrationn-formm">
    <form>
    <div className="formm-ttext">
        <h1>Rapport</h1>
    </div>
    <div className="form-group">
        <input type="text" className="form-control itemm" id="Nomdeproduit" placeholder="Nom de produit"/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control itemm" id="referencedeproduit" placeholder="reference de produit" />
    </div>
    <div className="form-group">
        <input type="text" className="form-control itemm" id="iddeproduit" placeholder="id de produit " />
    </div>
    <div className="form-group">
        <input type="text" className="form-control itemm" id="quantitealerte" placeholder="quantite d'alerte"/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control itemm" id="idfournisseur" placeholder="id fournisseur"/>
    </div>

    <div className="form-group">
    <textarea
              id="messagefournisseur"
              className="form-control itemm"
              placeholder="message de fournisseur "
              style={{  height: "135px" }}              
            />
    </div>

    <div className="form-group">
    <textarea
              id="description"
              className="form-control itemm"
              placeholder="description "
              style={{  height: "135px" }}
              
            />
    </div>

    <div className="form-group">
    <button type="reset" className="btn btn-block createaccountt">Annuler</button>
        <button type="submit" className="btn btn-block createaccountt">envoyer</button>
        
    </div>
</form>
</div>

  );
}

export default Rapport;
