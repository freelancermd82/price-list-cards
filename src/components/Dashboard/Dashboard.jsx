import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        { "id": 1, "name": "Student 1", "mathematics": 85, "physics": 78, "chemistry": 92 },
        { "id": 2, "name": "Student 2", "mathematics": 90, "physics": 88, "chemistry": 94 },
        { "id": 3, "name": "Student 3", "mathematics": 76, "physics": 84, "chemistry": 80 },
        { "id": 4, "name": "Student 4", "mathematics": 88, "physics": 90, "chemistry": 85 },
        { "id": 5, "name": "Student 5", "mathematics": 79, "physics": 76, "chemistry": 89 },
        { "id": 6, "name": "Student 6", "mathematics": 92, "physics": 85, "chemistry": 87 },
        { "id": 7, "name": "Student 7", "mathematics": 81, "physics": 82, "chemistry": 84 },
        { "id": 8, "name": "Student 8", "mathematics": 77, "physics": 80, "chemistry": 78 },
        { "id": 9, "name": "Student 9", "mathematics": 84, "physics": 87, "chemistry": 91 },
        { "id": 10, "name": "Student 10", "mathematics": 89, "physics": 90, "chemistry": 93 }
      ]
      
      



    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="mathematics" stroke="#82ca9d"></Line>
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;