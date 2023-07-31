import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const [dataSource, setDataSource] = useState([]);
  const [dataSource1, setDataSource1] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/getdata");
        const result = await res.json();
        setDataSource(result);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  const chartData = dataSource.map((dataPoint) => {
    const buyers = dataPoint.BuyBook;
    const seller = dataPoint.SellBook;
    const donate = dataPoint.DonateBook;
    const month = dataPoint.Month;

    return {
      BuyBook: buyers,
      SellBook: seller,
      DonateBook: donate,
      Month: month
    };
  });

  // Select the month for which you want to display data
  const targetMonth = "Jul"; // Replace "July" with the desired month

  // Find the data for the selected month
  const targetMonthData = chartData.find(dataPoint => dataPoint.Month === targetMonth);

  // Calculate the total count for the selected month
  const totalCount = targetMonthData ? targetMonthData.BuyBook + targetMonthData.SellBook + targetMonthData.DonateBook : 0;

  // Calculate percentage for the selected month
  const pieData = targetMonthData
    ? [
      { name: "BuyBook", value: targetMonthData.BuyBook / totalCount * 100 ,fill: "#ff0000" },
      { name: "SellBook", value: targetMonthData.SellBook / totalCount * 100 ,fill: "black"},
      { name: "DonateBook", value: targetMonthData.DonateBook / totalCount * 100 ,fill: "pink" }
    ]
    : [];

  return (
    <div>
      

      <PieChart width={800} height={400}>
      <Pie dataKey="value" isAnimationActive={false} data={pieData} cx={400} cy={200} outerRadius={150} label>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

    </div>
  );
};

export default Dashboard;
