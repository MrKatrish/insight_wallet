import React, { useState } from "react";
import ExternalCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Add any additional logic you need when the date changes
  };

  return (
    <div>
      <ExternalCalendar
        className="bg-customPurple w-72 m-8"
        onChange={handleDateChange}
        value={date}
        next2Label=">>"
        nextLabel=">"
        prev2Label="<<"
        prevLabel="<"
      />
      {/* Add any other content or styling here */}
    </div>
  );
};

export default MyCalendar;
