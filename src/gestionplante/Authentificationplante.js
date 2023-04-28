import React, {useState} from 'react';
import "./Authentificationplante.css";
//import { Link } from 'react-router-dom';

                                               

function Authentification() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let link;
    if (selectedOption === 'agri') {
      link = '/Rapportplante';
    } else if (selectedOption === 'responsable') {
      link = '/Dashboardapp/*';
    }

    window.location.href = link;
  };

  

  return (
    <div className="container">
      <div className="gauche">
      <div className="entête">
          <h2 className="animation a1">Welcome Back</h2>
          <h4 className="animation a2">Log in to your account using email and password and id</h4>
        </div>
        <form className="formulaire"   onSubmit={handleLogin} >
          <input type="email" className="form-field animation a3" placeholder="EmailAddress" required  />
          <input type="password" className="form-field animation a4" placeholder="Password" required  />
          <select className="form-field animation a5" value={selectedOption}

            onChange={handleOptionChange}  required>
             <option value="">Choose an option</option>
            <option value="responsable" >Responsable</option>
            <option value="agri">agricole</option>
          </select>
          <p className="animation a5"><a href="/forgotpassword">Forgot Password</a></p>  
                <button type="submit" className="animation a6">LOGIN</button>
        
        </form>
      </div>
      <div className="droite"></div>
    </div>
  );
}

export default Authentification;
