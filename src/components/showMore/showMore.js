import "./showMore.css";
import { useState } from "react";

const ShowMore = () => {
  const [giveMore, setgiveMore] = useState(false);
  return (
    <div className="showMore">
      <button className="showMore-button">
        <h1 onClick={()=> setgiveMore(!giveMore)}>Show more</h1>
      </button>
    </div>
  );
};

export default ShowMore;
