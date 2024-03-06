import React, { useState } from "react";
import ExternalCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// MyCalendar component
const MyCalendar = () => {
  // State to manage the selected date
  const [date, setDate] = useState(new Date());

  // Function to handle changes in the selected date
  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Add any additional logic you need when the date changes
  };

  return (
    <div>
      {/* ExternalCalendar component for date selection */}
      <ExternalCalendar
        className="bg-customPurple w-72 m-8"
        onChange={handleDateChange} // Callback function for date change
        value={date} // Selected date
        next2Label=">>" // Label for moving to the next two months
        nextLabel=">" // Label for moving to the next month
        prev2Label="<<" // Label for moving to the previous two months
        prevLabel="<" // Label for moving to the previous month
      />
      {/* Add any other content or styling here */}
    </div>
  );
};

export default MyCalendar;
