import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';


function FormHomepage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inizializzo hook useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8081/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Aggiungi il token alla richiesta
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          alert('Username o password errati');
        } else {
          throw new Error('Errore nella richiesta POST');
        }
      })
      .then(data => {
        console.log(data);
        if (data.success) {
          onLoginSuccess(); // chiamata alla funzione onLoginSuccess passata come prop
          navigate('/menu'); // Utilizzo useNavigate per navigare alla pagina Menu
        } else {
          // mostra un messaggio di errore all'utente
          alert('Qualcosa è andato storto :/');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='start'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='inputHome'
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            className='inputHome'
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormHomepage;
