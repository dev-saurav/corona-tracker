import React, { useState, useEffect } from "react";
import { dailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import { StylesProvider } from "@material-ui/core";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [dailyDataVal, setDailyData] = useState([])
    useEffect(() => {
        const fetchDailyData = async () => {
            setDailyData(await dailyData())

        }
        fetchDailyData();
    }, []);
    const LineChart = (
        dailyDataVal.length ?
            <Line
                data={{
                    labels: dailyDataVal.map(({ date }) => date),
                    datasets: [{
                        data: dailyDataVal.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true
                    }, {
                        data: dailyDataVal.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    },]
                }}
            /> :
            null
    )
    const BarChart = (
        confirmed ?
            (
                <Bar
                    data={{
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            lables: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{ legend: { display: false }, title: { display: true, text: `Current state in ${country}` } }}
                />
            ) : null
    )
    return (
        <div className={styles.container}>
            {country ? BarChart : LineChart}
        </div>
    )
}


export default Chart;