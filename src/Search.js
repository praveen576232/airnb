import "./Search.css";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { PeopleAltTwoTone } from "@material-ui/icons";
import { useHistory } from 'react-router-dom'
function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handelSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };
  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handelSelect}
      ></DateRangePicker>
      <div className="search-gest">
        <h2>Number of gest</h2>
        <PeopleAltTwoTone />
      </div>
      <input min={0} defaultValue={2} type="number"></input>
      <Button onClick={() => history.push('/search')} className="search-gest-button">Search Airbnb</Button>
    </div>
  );
}

export default Search;
