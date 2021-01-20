import "./postit.css";



const Postit = ({ title, description, button }) => { 
    const handleClick = () => {
        console.log('hola')
    }


     return (
       
        <div className="postit__container">
          
            <div className="postit__title"><h1>{title}</h1></div>
            <div className="postit__description">{description}</div>
            <button className="MyButton" onClick={handleClick}><h1 className="realButton">{button}</h1></button>
            
            
        </div>
       
     );
     }
        
 export default Postit;