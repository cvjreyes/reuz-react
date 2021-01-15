import "./Postit.css";

const Postit = () => { 
    const handleClick = () => {
        console.log('hola')
    }


     return (
       
        <div className="postit__container">
            <div className="postitTitle__container">
            <div className="postit__title">Los mejores productos usados</div>
        </div>
        <div className="postitDescription__container">
            <div className="postit__description">Compra productos usados y ahorra!!</div>
            <div className="ButtonContainer">
            <div className="MyButton" onClick={handleClick}>Compra Ya!</div>
        </div>
        </div>
        </div>
       
     );
     }
        
 export default Postit;


