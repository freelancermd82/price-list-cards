
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';



const PhoneBar = () => {

    const [phones, setPhones] = useState([]);
    

    useEffect( ()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadData = data.data.data;
            console.log(loadData);
            const phonesData = loadData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            console.log(phonesData);
            setPhones(phonesData);
        });
    },[])


    return (
        <div>
            <BarChart width={1000} height={300} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey="price"></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;
