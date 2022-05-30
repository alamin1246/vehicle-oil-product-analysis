import React from 'react';
import './Dashboard.css'
import PieCharts from '../Charts/PieChart';
import LineCharts from '../Charts/LineChart';
import AreaCharts from '../Charts/AreaChart';
import BarCharts from '../Charts/BarChart';

const Dashboard = () => {
    return (
        <div className="container charts" >

            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-around ">
                <div className="p-5" >
                    <h2>This is PieChart</h2>
                    <div>
                        <PieCharts></PieCharts>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-5 mt-lg-0 pe-4 pe-lg-0">

                    <div>
                        <h2>This is LineChart</h2>
                        <LineCharts></LineCharts>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-around ">
                <div className="d-flex align-items-center mt-5 mt-lg-0 pe-4 pe-lg-0">
                    <div>
                        <h2>This is BarChart</h2>
                        <BarCharts></BarCharts>
                    </div>

                </div>

                <div className="p-5" >
                    <div>
                        <h2>This is AreaChart</h2>
                        <AreaCharts></AreaCharts>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Dashboard;