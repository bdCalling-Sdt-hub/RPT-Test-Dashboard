import {  DatePicker } from "antd";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Apr",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "May",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Jul",
      uv: 3490,
    pv: 4300,
    amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }
    
  ];

const BarChartIncomeRatio = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (
        <div className="bg-white w-[66%] h-[318px] mt-5 rounded-xl border-1 shadow-xl border-secondary ">
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
            <DatePicker className="border-2 border-[#3BA6F6] font-bold "  onChange={onChange}  picker="month" />
          </div>
        </div>
        <div>
      
          <BarChart
            width={990}
            height={250}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
             <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{stroke: '#7CC3F9', strokeWidth: 0.5}} />
            <YAxis tick={{stroke: '#7CC3F9', strokeWidth: 0.5}} />
            <Bar
             dataKey="uv"
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
