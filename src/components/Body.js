import RestrauantCard from "./RestrauantCard";
import dataList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurantcard-container">
        {dataList.map((restaurant) => (
          <RestrauantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
