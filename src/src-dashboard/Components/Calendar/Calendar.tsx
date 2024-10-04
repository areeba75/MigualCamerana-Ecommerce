import {  useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateFilterContainer = ({closeHandler}:any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 1)));
  const [selectedRange, setSelectedRange] = useState("today");
  const [data, setData] = useState(null); 
  
  const handleRangeChange = (range) => {
    setSelectedRange(range);
    const today = new Date();
    switch (range) {
      case "today":
        setStartDate(new Date(today.setMonth(today.getMonth() - 1))); 
        break;
      case "last7Days":
        setStartDate(new Date(today.setDate(today.getDate() - 7)));
        break;
      case "last15Days":
        setStartDate(new Date(today.setDate(today.getDate() - 15)));
        break;
      case "lastMonth":
        setStartDate(new Date(today.setMonth(today.getMonth() - 1)));
        break;
      default:
        setStartDate(today);
    }
  };

  const handleShowData = () => {
    const result = `Displaying data from ${startDate.toDateString()} to ${selectedDate.toDateString()}`;
    setData(result);
    alert(result); console.log(result); 
    closeHandler()
  };

  return (
    <>
      <div className=" bg-white mx-auto p-4" >
        <div className="flex flex-col md:flex-row ">
          <ul className=" bg-white p-2 shadow rounded-md md:w-max">
            <li
              className={`p-1 mb-2 rounded cursor-pointer ${selectedRange === "today" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => handleRangeChange("today")}
            >
              Today
            </li>
            <li
              className={`p-1 mb-2 rounded cursor-pointer ${selectedRange === "last7Days" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => handleRangeChange("last7Days")}
            >
              Last 7 Days
            </li>
            <li
              className={`p-1 mb-2 rounded cursor-pointer ${selectedRange === "last15Days" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => handleRangeChange("last15Days")}
            >
              Last 15 Days
            </li>
            <li
              className={`p-1 mb-2 rounded cursor-pointer ${selectedRange === "lastMonth" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => handleRangeChange("lastMonth")}
            >
              Last Month
            </li>
          </ul>

          <div className="flex">
            <div className="p-1 m-auto hidden lg:block">
              <h2 className="text-lg font-semibold mb-4">Select From Date</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full p-2 border border-gray-300 rounded"
                inline
                showMonthDropdown
                showYearDropdown
              />
            </div>

            <div className="flex p-1 m-auto">
              <div>
                <h2 className="text-lg font-semibold mb-4">Selected Date</h2>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="w-full p-2 border border-gray-300 rounded"
                  inline
                  showMonthDropdown
                  showYearDropdown
                />
              </div>
            </div>

          </div>

        </div>
        <hr />
        <div className="flex justify-end gap-2 mt-4">
        <button
            onClick={closeHandler}
            className="bg-gray-400 text-white py-2 px-4 rounded"
          >
            Close
          </button>
          <button
            onClick={handleShowData}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Apply
          </button>
        </div>

      </div>
    </>
  );
};

export default DateFilterContainer;
