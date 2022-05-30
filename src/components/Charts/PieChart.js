import React, { useContext } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { AllContext } from "../../App";


export default function PieCharts() {
    const { data } = useContext(AllContext);

    return (
        <PieChart width={500} height={500}>
            <Pie
                data={data}
                dataKey="revenue"
                cx={250}
                cy={250}
                outerRadius={200}
                fill="lightblue"
            />
            <Tooltip />

        </PieChart>
    );
}
