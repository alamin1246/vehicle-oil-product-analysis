import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { AllContext } from '../../App';

const LineCharts = () => {



    const { data } = useContext(AllContext);

    const sellChart = (
        <LineChart width={500} height={500} data={data} margin={{ top: 5, right: 95, bottom: 5, left: -20 }}>
            <Line type="monotone" dataKey="sell" stroke="lightblue" />

            <CartesianGrid stroke="gray" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis dataKey="sell" />
            <Tooltip />
        </LineChart>
    );
    return (
        <div>
            {sellChart}
        </div>
    );
};

export default LineCharts;