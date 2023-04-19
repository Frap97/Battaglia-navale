import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/profile.css'


function Profile() {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [deleteUsername, setDeleteUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleDeleteUsernameChange = (event) => {
    setDeleteUsername(event.target.value);
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8081/users/${username}/username`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newUsername }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella richiesta PUT');
        }
      })
      .then((data) => {
        if (data.success) {
          console.log(newUsername);
          alert('ok');
          window.location.reload();
        } else {
          alert('Nome utente già utilizzato');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8081/deleteByUsername`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: deleteUsername }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella richiesta DELETE');
        }
      })
      .then((data) => {
        if (data.success) {
          alert('ok');
          window.location.reload();
        } else {
          alert('Errore');
        }
      });
  };

  const showForm = (form) => {
    form.style.display = 'block';
  };

  return (
    <div className="containerProfile">
      <div className="profile flex">
      <Link to="/"><Header title= "Battaglia Navale" /> </Link> 
      </div>

      <p className="profile">Modifica username</p>
      <button onClick={() => showForm(document.getElementById('formUpdate'))}>
        Cambia nome utente
      </button>
      <form onSubmit={handleUpdateSubmit} id="formUpdate" style={{ display: 'none' }}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="vecchio username"
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          name="newUsername"
          id="newUsername"
          value={newUsername}
          placeholder="nuovo username"
          onChange={handleNewUsernameChange}
        />
        <input type="submit" name="update" value="Aggiorna" />
     </form>

      <p className="profile">Elimina Account</p>
      <button onClick={() => showForm(document.getElementById('formDelete'))}>
        Elimina account
      </button>
      <form onSubmit={handleDeleteSubmit} id="formDelete" style={{ display: 'none' }}>
   <input
          type="text"
          name="username"
          id="deleteUsername"
          value={deleteUsername}
          placeholder="username"
          onChange={handleDeleteUsernameChange}
        />
        <input type="submit" name="delete" value="Elimina" />
      </form>
      </div>
  )
}

export default Profile;