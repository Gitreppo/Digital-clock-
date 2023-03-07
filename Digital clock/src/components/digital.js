import './digital.css';
import React, { useEffect, useState } from 'react';
import DayDate from './Date';

export default function Digital() {

    const details = {
        hours: "00",
        minutes: "00",
        seconds: "00",
        ampm: null,
    }

    const [data, setData] = useState(details);
    const Timer = () => {
        const addZero = (n) => (n < 10 ? "0" + n : n);
        const localtime = (n) => (n > 12 ? (n - 12) : (n));
        const ampm = (new Date().getHours() >= 12 ? "Pm" : "Am")
        setData({
            hours: addZero(localtime(new Date().getHours())),
            minutes: addZero(new Date().getMinutes()),
            seconds: addZero(new Date().getSeconds()),
            ampm: ampm,
        }
        )
    }


    useEffect(() => {

        const loading = setInterval(() =>
            Timer()
            ,);

        return () => {
            clearInterval(loading);

        }


    }, [])



    return (
        <div className="digital">
            <h1>Digital clock</h1>
            <DayDate />
            <h4>{data.hours}</h4>
            <h4>{data.minutes}</h4>
            <h4>{data.seconds}</h4>
            <h4>{data.ampm}</h4>

          

        </div>
    );
}

