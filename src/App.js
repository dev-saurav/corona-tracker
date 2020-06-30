import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from './components';
import { fetchData, dailyData } from "./api";
import styles from "./app.module.css";
import coronaImg from "./assets/corona.png"
class App extends Component {
    state = {
        data: {},
        country: ""
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountrySelect = async (country) => {
        console.log(country)
        const fetchDataVal = await fetchData(country)
        this.setState({ data: fetchDataVal, country: country })
    }

    render() {
        const { data } = this.state
        return (
            <div className={styles.container}>
                <img src={coronaImg} classNames={styles.coronaImg} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountrySelect={this.handleCountrySelect} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        )
    }
}

export default App;