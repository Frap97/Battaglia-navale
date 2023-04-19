import '../style/menu.css'
import Header from '../components/Header';
import Score from '../components/Score';
import ToggleMenu from '../components/toggleMenu';
import ship from '..//img/1-ship.png';
import { Link } from "react-router-dom";

function Game({ buttonTutorial }) {

    return (
    <div className='allPage'>
   <Link to="/"><Header title= "Battaglia Navale" /> </Link> 
   <ToggleMenu />
    <div className="container ingame">
    <div id="ships">
    <img className="ship two" data-length="2" src={ship} />
    <img className="ship two" data-length="2" src={ship} />
    <img className="ship" data-length="1" src={ship} />
    <img className="ship" data-length="1" src={ship} />
    </div>
    { buttonTutorial }
    <button id="start" disabled>
    start
    </button>

    <div className="field">
    <div className="field-avversario">
    {Array.from({ length: 64 }).map((any, index) => (
    <div key={index} className="square avv"></div>
    ))}
    </div>
    <div className="myfield">
    {Array.from({ length: 64 }).map((any, index) => (
    <div key={index} className="square my"></div>
    ))}

    </div>
    <Score className="score position" withExtraClass={true}/>    </div>
    </div>

    </div>
    );
    }
    export default Game;