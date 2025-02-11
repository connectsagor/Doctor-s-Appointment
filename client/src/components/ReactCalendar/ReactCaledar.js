import React from "react";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

const ReactCaledar = (props) => {
  const { selectedDate, onSelectedDate } = props.date;
  return (
    <div>
      <Calendar onChange={onSelectedDate} value={selectedDate} />
    </div>
  );
};

export default ReactCaledar;
