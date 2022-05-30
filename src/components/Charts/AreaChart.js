import React, { useContext } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import { AllContext } from "../../App";



export default function AreaCharts() {
    const { data } = useContext(AllContext);
    return (
        <AreaChart
            width={500}
            height={500}
            data={data}
            margin={{
                top: 10,
                right: 40,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="gray" fill="gray" />
        </AreaChart>
    );
}
