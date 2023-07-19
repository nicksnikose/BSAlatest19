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
      {/* <h2>MONTHLY PROGRSS</h2> */}
    <div className="pl-10 lg:pl-20 md:pl-20 relative align-items-center gap-x-30 gap-y-30 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xs:gap-10">
  
      
        <div className="bg-[white] rounded-lg lg:w-[50vmin] lg:h-[40vmin] xl:w-[60vmin] xl:h-[40vmin] md:w-[50vmin] md:h-[30vmin] sm:w-[35vmin] sm:h-[30vmin] justify-center flex p-2">
          <BarChart chartData={userData} />
        </div>
          {/* <div style={{ width: 400 }}>
            <LineChart chartData={userData} />
          </div> */}
        <div  className="bg-[white] rounded-lg lg:w-[50vmin] lg:h-[40vmin] xl:w-[60vmin] xl:h-[40vmin] md:w-[50vmin] md:h-[30vmin] sm:w-[35vmin] sm:h-[30vmin] justify-center flex p-2 ">
          <PieChart chartData={userData} />
        </div>
    
    </div>
    </div>
   )
};

export default DataChart;









  // const [userData, setUserData] = useState({
  //   labels: apiData.map((data) => data.Name),
  //   datasets: [
  //     {
  //       label: "Student Detail Persentag",
  //       data: apiData.map((data) => data.Persent),
  //       backgroundColor: ["red", "green", "blue","yellow","lime",],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
