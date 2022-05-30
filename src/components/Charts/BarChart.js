import React, { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { AllContext } from "../../App";


export default function BarCharts() {
    const { data } = useContext(AllContext);
    return (
        <BarChart
            width={500}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 40,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="lightblue" />
            <Bar dataKey="revenue" fill="gray" />
        </BarChart>
    );
}
