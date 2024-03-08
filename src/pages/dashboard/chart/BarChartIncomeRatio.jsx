import {  DatePicker } from "antd";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetChartQuery } from "../../../redux/features/getChartApi";
import Loading from "../../../components/Loading/Loading";
import { useState } from "react";





const BarChartIncomeRatio = () => {
  const [year,setYear ] = useState('2024')
  const {data:chartData,isError,isLoading,isSuccess} = useGetChartQuery(year); 

    const onChange = (date, dateString) => {
        console.log(dateString);
        setYear(dateString)
      };
      if(isLoading){
        return <Loading/>
      }
      console.log(chartData?.data);
    return (
        <div className="bg-white w-[100%]  h-[318px] mt-5 rounded-xl border-1 shadow-xl border-secondary ">
        <div className="flex justify-between p-[16px]">
          <div>
            <h1 className="text-[20px] font-medium">Earning</h1>
            {/* <div className="flex gap-5 mt-[20px]">
              <div className="flex gap-2 items-center">
                <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>
                <span>This month</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#B0D6A0] w-4 h-4 rounded-full"></span>
                <span>Last month</span>
              </div>
            </div> */}
          </div>
          <div>
            <DatePicker  picker="year" className="border-2 border-[#3BA6F6] font-bold "  onChange={onChange}/>
          </div>
        </div>
        <div>
      
          <BarChart
            width={1500}
            height={250}
            data={chartData?.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
             <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{stroke: '#7CC3F9', strokeWidth: 0.5}} />
            <YAxis dataKey="total" tick={{stroke: '#7CC3F9', strokeWidth: 0.5}} />
            <Bar
             dataKey="total"
              fill="#3BA6F6"
              barSize={36}
              activeBar={<Rectangle fill="pink" stroke="green" />}
            />
            {/* <Bar
              dataKey="ThisMonth"
              fill="#54A630"
              barSize={6}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            /> */}
          </BarChart>
  
        </div>
        </div>
    );
}

export default BarChartIncomeRatio;
