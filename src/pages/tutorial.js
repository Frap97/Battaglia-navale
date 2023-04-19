import Game from "./game"
import TutorialLogic from "../utils/tutorialLogic"

const Tutorial = () => {
/* alert('seleziona la prima nave (la trovi in alto a sinistra) e poizionala sulla casella, ripeti l\'operazione per tutte le navi\nuna volta terminato premere su done')
    
function attack(){
    alert('Una volta impostate tutte le navi il gioco comincia!\nPremi sulla casella avversaria che vuoi colpire')
    const avvField = document.getElementsByClassName('avv');
    Array.from(avvField).forEach((square, index) => {
        square.onclick = () => {
     alert('Ben fatto')
     alert('Premi su start per iniziare a giocare')
        };
      }); 
} */
return (
<>
<Game buttonTutorial={<button id="done" >done</button> }/>
</>
    )
}

export default Tutorial;