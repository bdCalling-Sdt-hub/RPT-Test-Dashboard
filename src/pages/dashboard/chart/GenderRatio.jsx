import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#053248', '#3BA6F6', '#205B87'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GenderRatio = () => {
    return (
        <div className='bg-white w-[33%] h-[318px] mt-5 rounded-xl border-1 shadow-xl border-secondary '>
            <div className='p-[16px]'> 
                <h1 className="text-[20px] font-medium">Gender Ratio</h1>
            </div>
            <ResponsiveContainer width="100%" height="60%">
          <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center p-[16px] gap-[24px]">
            <div className="flex gap-2 items-center">
              <span className="bg-[#053248] w-4 h-4"></span>
              <span>Female</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-[#3BA6F6] w-4 h-4 "></span>
              <span>Male</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-[#205B87] w-4 h-4 "></span>
              <span>Others</span>
            </div>
      </div>
    
        </div>
       
       
   
    );
}

export default GenderRatio;
