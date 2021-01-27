import "./icon.css";
import icon1 from '../../assets/cup.svg';
import icon2 from '../../assets/check.svg';
import icon3 from '../../assets/shipping.svg';
import icon4 from '../../assets/support.svg';

const Icon = () => { 
    const handleClick = () => {
        console.log('hola')
    }


     return (

        
       
            <div className="icon__title__container" onClick={handleClick}>

                <table>
                    <tbody>
                        <tr>
                            <td className="icon__td">
                                <img className="icon__icon1" src={icon1} alt={icon1} />
                                <span className="icon__title1">Champions in variety</span>
                                <span className="icon__description1">Thousands of products</span>   
                            </td>
                            <td className="icon__td">
                                <img className="icon__icon2"  src={icon2} alt={icon2}/>
                                <span className="icon__title2">Verified vendors</span>
                                <span className="icon__description2">You can trust them</span>   
                            </td>
                            <td className="icon__td">
                                <img className="icon__icon3"  src={icon3} alt={icon3}/>
                                <span className="icon__title3">Free Shipping</span>
                                <span className="icon__description3">Order over 150€</span>             
                            </td>
                            <td className="icon__td">
                                <img className="icon__icon4"  src={icon4}alt={icon4}/>
                                <span className="icon__title4">24 / 7 Support</span>
                                <span className="icon__description4">Dedicated Support</span>        
                            </td>                      
                        </tr>
                    </tbody>
                </table>
        
             </div>
     
     );
    }
        
 export default Icon;