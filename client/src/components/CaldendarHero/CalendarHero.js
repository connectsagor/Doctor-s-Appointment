import React from "react";
import "./CalendarHero.css";
import ReactCaledar from "../ReactCalendar/ReactCaledar";
import chair from "../../assets/images/chair.png";
const CalendarHero = (props) => {
  const { selectedDate, onSelectedDate } = props.date;

  return (
    <div className="container">
      <div className="calendar-hero d-flex justify-content-centern align-items-center p-3">
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-items-center">
            <ReactCaledar date={{ selectedDate, onSelectedDate }} />
          </div>
          <div className="col-md-6">
            <img className="w-100" src={chair} alt="chair" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHero;
