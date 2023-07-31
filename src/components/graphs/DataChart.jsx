import { useState} from "react";
import BarChart from"./BarChart"
import LineChart from "./LineChart";
import PieChart from "./PieChart";
 import { UserData } from "./Data";
// import "../App.css";

function DataChart() {

  const [userData, setUserData] = useState({  
    labels: UserData.map((data) => data.student),
    datasets: [
      {
        label: "Monthly Progess",
        data: UserData.map((data) => data.Persent),
        backgroundColor: ["pink", "orange", "blue", "red", "lime"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],

  } );
   
  return (
    <div className=" ">
   
    <div className=" pl-10 lg:pl-20 md:pl-20 relative align-items-center gap-x-90 gap-y-30 grid ">
  
      
        <div className="bg-[white] rounded-lg lg:w-[120vmin] lg:h-[40vmin] xl:w-[120vmin] xl:h-[60vmin] md:w-[50vmin] md:h-[30vmin] sm:w-[35vmin] sm:h-[30vmin] justify-center ">
          <BarChart chartData={userData} />
        </div>
         <br /><br />
        <div className="bg-[white] rounded-lg lg:w-[120vmin] lg:h-[60vmin] xl:w-[120vmin] xl:h-[60vmin] md:w-[60vmin] md:h-[30vmin] sm:w-[35vmin] sm:h-[30vmin]  ">
          <PieChart chartData={userData} />
        </div>
    
    </div>
    </div>
   )
};

export default DataChart;









