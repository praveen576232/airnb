import "./SearchResult.css";
import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img alt="" src={img}></img>
      <FavoriteBorderIcon className="searchResult_heart"></FavoriteBorderIcon>
      <div className="searchResult_info">
        <div className="searchResult_info_top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult_info_bottom">
          <div className="searchResult_info_bottom_starts">
            <StarIcon className="searchResult_info_bottom_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="searchResult_info_bottom_price">
        <h2>{price}</h2>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default SearchResult;
