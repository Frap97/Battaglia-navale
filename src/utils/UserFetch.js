const LoginFetch = ({}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8081/getUsername', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          alert('Error 404');
        } else {
          throw new Error('Errore nella richiesta POST');
        }
      })
      .then(data => {
        console.log(data);
        if (data.success) {
          
        } else {
          // mostra un messaggio di errore all'utente
          alert('Qualcosa è andato storto :/');
        }
      })
      .catch(error => console.error(error));
  };

  return handleSubmit;
}

export default LoginFetch;
