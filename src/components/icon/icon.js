import "./icon.css";

const Icon = ({urlImage, title, description, icon1}) => { 
    const handleClick = () => {
        console.log('hola')
    }


     return (
       
        // <div classN  ame="icon__container">
            <div className="iconTitle__container" onClick={handleClick}>
                <img src={urlImage} className="icon__icon" alt={icon1} />
                <span className="icon__title">{title}</span>
                <span className="icon__description">{description}</span>
                
             </div>
       /*  </div> */
       
     );
     }
        
 export default Icon;