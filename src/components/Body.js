import RestrauantCard from "./RestrauantCard";
import dataList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(dataList);

  return (
    <div className="body">
      <div className="toprated">
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter((x) => {
              return x.info.avgRating > 4.3;
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurantcard-container">
        {listOfRestaurant.map((restaurant) => (
          <RestrauantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
