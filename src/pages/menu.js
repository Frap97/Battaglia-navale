import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Score from "../components/Score";
import ToggleMenu from "../components/toggleMenu";
import '../style/menu.css'


const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="allPage">
        <Link to="/"><Header title= "Battaglia Navale" /> </Link> 
       <ToggleMenu />
            <div className="container margin">
                <div className="menu">
                    <div className="menu-item">
                 <Link to="/game">NUOVA PARTITA</Link>
                    </div>
                    <div className="menu-item">
                    <Link to="/tutorial">TUTORIAL</Link>
                    </div>
                    <div className="menu-item">
                    <Link to="/opzioni">OPZIONI</Link>
                    </div>
                </div>
                <Score className="score " />

                   
                    </div>
                </div>

        
    );
}

export default Menu;
