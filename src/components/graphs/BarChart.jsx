import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaUsers } from "react-icons/fa";
import { Card, CardBody, Typography } from '@material-tailwind/react'


const Dashboard = () => {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource1, setDataSource1] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/getdata");
        const result = await res.json();
        setDataSource(result);
  
        // Get the length of data with LoginTime
        const dataWithLoginTime = result.filter(item => item.LoginTime);
        const lengthOfDataWithLoginTime = dataWithLoginTime.length;
        setDataSource1(lengthOfDataWithLoginTime)
     
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
  
    getData();
  }, []);


  const chartData = dataSource.map((dataPoint) => {
 
    const buyers = dataPoint.BuyBook; // Extract the first name
    const seller=dataPoint.SellBook;
    const donate=dataPoint.DonateBook;
    const month = dataPoint.Month;


// Calculate remaining hours

    return {
        BuyBook:buyers,
        SellBook:seller,
        DonateBook :donate,
        Month :month
    };
  });

  

  return (
    <div>




      <BarChart width={800} height={400} data={chartData} margin={{top : 20}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="BuyBook" stackId="stack" fill="#ff0000" barSize={40} />
        <Bar dataKey="SellBook" stackId="stack" fill="black" barSize={20} label={{ position: 'top' }} />
        <Bar dataKey="DonateBook" stackId="stack" fill="pink" barSize={20} label={{ position: 'top' }} />
      </BarChart>

    </div>
  );
};

export default Dashboard;