import axios from "axios";

const api = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changableurl = api;
    if (country) {
        changableurl = `${api}/countries/${country}`;
    }
    try {
        const { data: { deaths, recovered, confirmed, lastUpdate } } = await axios.get(changableurl);
        const modifiedData = {
            deaths,
            recovered,
            confirmed,
            lastUpdate,
        }
        console.log(modifiedData)
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const dailyData = async () => {
    try {
        const { data } = await axios.get(`${api}/daily`);
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {

    }
}

export const getCountries = async () => {
    try {
        const { data } = await axios.get(`${api}/countries`)
        return data.countries
    } catch (error) {
        console.log(error)
    }
}