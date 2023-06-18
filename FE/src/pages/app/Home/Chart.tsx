import React, {FC} from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {}
  
const data = [
  { name: '', uv: "" },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D' },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];
  
  const Chart: FC<Props> = () => {
  return (
    <div style={{ width: '100%' }} className="pl-5">
        <div className="flex justify-around items-center">
          <span className='funds-text font-normal text-xl text-black'>Funds Mngr.</span>
          <span className='funds-text font-normal text-base text-black'>26 Oct</span>
        </div>
         <ResponsiveContainer width="100%" height={140}>
          <LineChart
            width={600}
            height={180}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis  /> */}
            {/* <YAxis /> */}
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#CE57D0" fill="#CE57D0" />
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart