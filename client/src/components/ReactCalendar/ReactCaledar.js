import React from "react";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

const ReactCaledar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default ReactCaledar;
