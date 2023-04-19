import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import bcrypt from 'bcryptjs';

function Registration() {
  const navigate = useNavigate(); // Inizializzo hook useNavigate

  async function handleRegistrationForm(event) {
    event.preventDefault(); // previene il comportamento predefinito del form

    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const hashedPassword = await bcrypt.hash(password, 10); // genera hash della password

    fetch('http://localhost:8081/auth/registrazione', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password: hashedPassword, email}) // invia hash della password
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella richiesta POST');
        }
      })
      .then(data => {
        if (data.success) {
          navigate('/menu'); // Utilizzo useNavigate per navigare alla pagina Menu
        } else {
          // mostra un messaggio di errore all'utente
          alert('Username già utilizzato');
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      <div className="header-firstPage">
        <Link to="/">
          <Header title="Battaglia Navale" />
        </Link>
      </div>
      <form method="post" onSubmit={handleRegistrationForm}>
        <h3>
          <p>Preparati per la battaglia</p>
        </h3>
        <input type="text" name="username" placeholder="Username" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <input type="email" name="email" placeholder="e-mail" />
        <input type="submit" />
      </form>
    </>
  );
}

export default Registration;
