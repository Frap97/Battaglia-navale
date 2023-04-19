import Header from '../components/Header';
import FormHomepage from '../components/formHomepage';
import { Link } from "react-router-dom";

function Homepage() {
  const handleLoginSuccess = () => {
    console.log('Login success!');
    // Esegui qui il codice che deve essere eseguito dopo la login dell'utente
  };

  return (
    <div className="all-homepage">
      <div className="hero"> 
        <div className="opacity"></div>   
        <Link to="/"><Header title= "Battaglia Navale" /> </Link> 
        <FormHomepage onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}

export default Homepage;
