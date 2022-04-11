import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie,
    PieChart, XAxis, YAxis,
} from "recharts";

const DashBoard = () => {
    const chartData = [{
        month: "Mar",
        investment: 100000,
        sell: 200,
        revenue: 13580,
    },
    {
        month: "Apr",
        investment: 200000,
        sell: 350,
        revenue: 20230,
    },
    {
        month: "May",
        investment: 500000,
        sell: 400,
        revenue: 77105,
    },
    {
        month: "Jun",
        investment: 500000,
        sell: 550,
        revenue: 30145,
    },
    {
        month: "Jul",
        investment: 600000,
        sell: 650,
        revenue: 60125,
    },
    {
        month: "Aug",
        investment: 700000,
        sell: 700,
        revenue: 80115,
    },
    ];

    return (<div>
        <Row className='d-flex align-items-center container mx-auto my-5'>
            <Col lg={6} >
                <p className="text-center fw-bold text-primary">Car Sell In Month </p> <ComposedChart width={600}
                    height={300}
                    data={chartData}
                    margin={
                        {
                            right: 60
                        }
                    }>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone"
                        dataKey="investment"
                        fill="#0d6efd"
                        stroke="#000000" />
                    <Bar dataKey="sell"
                        barSize={20}
                        fill="#0d6efd" />
                    <Line type="monotone"
                        dataKey="revenue"
                        stroke="#000000" />
                </ComposedChart>
            </Col>
            <Col lg={6} >
                <p className="text-center fw-bold text-primary">Car Investment vs Revnue </p> <BarChart width={600}
                    height={300}
                    data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis datakey="month" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="investment"
                        stackId="a"
                        fill="#0d6efd" />
                    <Bar dataKey="revenue"
                        stackId="a"
                        fill="#000000" />
                </BarChart>
            </Col>
        </Row>
        <Row className="d-flex align-items-center container mx-auto">
            <Col lg={6}>
                <p className="text-center fw-bold text-primary" >Car Investment vs Revnue </p> <LineChart width={600}
                    height={300}
                    data={chartData}
                    margin={
                        {
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }
                    }>
                    <Line type="monotone"
                        dataKey="sell"
                        stroke="#0d6efd"
                        activeDot={
                            {
                                r: 8
                            }
                        }
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sell"
                        height={60} />
                    <YAxis height={60} />
                    <Legend />
                    <Line type="monotone"
                        dataKey="investment"
                        stroke="#000000" />
                    <Line type="monotone"
                        dataKey="revenue"
                        stroke="#0d6efd" />
                </LineChart>
            </Col>
            <Col lg={6} >
                <p className="text-center fw-bold text-primary">Car Investment vs Revnue </p> <PieChart width={600}
                    height={300} >
                    <Pie data={chartData}
                        dataKey="investment"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        fill="#0d6efd" />
                    <Pie data={chartData}
                        dataKey="revenue"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#000000"
                        label />
                </PieChart>
            </Col>
        </Row>
    </div>
    );
};

export default DashBoard;