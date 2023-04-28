import React, { useState } from 'react';
import "./Authentificationstock.css";
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
      link = '/Rapportstock';
    } else if (selectedOption === 'responsable') {
      link = '/DashboardStockapp/*';
    }

    window.location.href = link;
  };

  return (
    <div className="container">
      <div className="gauchee">
        <div className="entêtee">
          <h2 className="animation a1">Welcome Back</h2>
          <h4 className="animation a2">
            Log in to your account using email and password and id
          </h4>
        </div>
        <form className="formulairee"   onSubmit={handleLogin} >
          <input
            type="email"
            className="form-field animation a3"
            placeholder="EmailAddress"
            required
          />
          <input
            type="password"
            className="form-field animation a4"
            placeholder="Password"
            required
          />
          <select
            id="id"
            className="form-field animation a5"
              value={selectedOption}
            onChange={handleOptionChange}
            required
          >
            <option value="">Choose an option</option>
            <option value="responsable">Responsable</option>
            <option value="agri">Agriculteur</option>
          </select>
          <p className="animation a5">
            <a href="/forgotpassword">Forgot Password</a>
          </p>

          <button type="submit" className="animation a6">LOGIN</button>
        </form>
      </div>
      <div className="droitee"></div>
    </div>
  );
}

export default Authentification;
