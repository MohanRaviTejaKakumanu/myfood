import { CDN_URL } from "../utils/constants";

const RestrauantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, id } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="card-details">
      <div className="card">
        <img
          className="card-img"
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default RestrauantCard;
