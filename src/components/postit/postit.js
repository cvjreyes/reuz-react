import { useHistory } from "react-router-dom";
import "./postit.css";

const Postit = ({ title, description, button }) => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/products")
  };

  return (
    <div className="postit__container">
      <div className="postit__title">
        <h1>{title}</h1>
      </div>
      <div className="postit__description">{description}</div>
      <div className="MyButton" onClick={handleClick}>
        <h1 className="realButton">{button}</h1>
      </div>
    </div>
  );
};

export default Postit;
